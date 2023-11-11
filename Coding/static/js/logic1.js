mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFucmF2ZWxvIiwiYSI6ImNsb213c2k0NDB6OXgya25yYW5vdzkwbGoifQ.DGQwMzAqLexmpjlBYRm-Lg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [146.9211, -31.2532],
  zoom: 4.5
});

// Variables to store marker data and the polygon clicked
var markerData;
var clickedPolygon;

// Load the GeoJSON data
map.on('load', function () {
  map.addSource('geojson-data', {
    type: 'geojson',
    data: 'http://127.0.0.1:5000/api/v1.0/NSW_suburbs' // Path to the GeoJSON file
  });

  map.addLayer({
    id: 'geojson-layer',
    type: 'fill', 
    source: 'geojson-data',
    paint: {
      'fill-color': 'blue',
      'fill-opacity': 0.3
    },
  });

  map.on('click', 'geojson-layer', (e) => {
    clickedPolygon = e.features[0];
    // Calculate the sum of markers within the clicked polygon
    const sumOfMarkers = calculateSumOfMarkers(clickedPolygon);
    // Display a popup with the sum of markers
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`<h2>Suburb: ${clickedPolygon.properties.nsw_loca_2} - ${clickedPolygon.properties.Postcode}</h2>
              <h3>Total of EV chargers: ${sumOfMarkers}</h3>`)
      .addTo(map);
  });

  // Load the JSON file with marker data
  fetch('http://127.0.0.1:5000/api/v1.0/ev_chargers')
    .then(response => response.json())
    .then(data => {
      // Store marker data for later use
      markerData = data;

      // Add markers to the map
      data.forEach(marker => {
        new mapboxgl.Marker({
          icon: 'Resources/EV_marker.jpg'
        })
          .setLngLat([marker.longitude, marker.latitude])
          .setPopup(new mapboxgl.Popup().setHTML(`<h1>Name: ${marker.Name}</h1>
            <hr> <h3>Address: ${marker.Address}</h3>
            <h3>Plug types: ${marker['Plug types']}</h3>
            <h3>Postcode: ${marker.Postcode}</h3>`))
          .addTo(map);
      });
    });
});

// Function to calculate the sum of markers within a polygon
function calculateSumOfMarkers(polygon) {
  
  const polygonCoordinates = polygon.geometry.coordinates[0];
  const markersWithinPolygon = markerData.filter(marker => {
    const markerLngLat = [marker.longitude, marker.latitude];
    return pointInPolygon(markerLngLat, polygonCoordinates);
  });

  return markersWithinPolygon.length;
}

// Function to check if a point is inside a polygon
function pointInPolygon(point, vs) {
  var x = point[0], y = point[1];

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0], yi = vs[i][1];
    var xj = vs[j][0], yj = vs[j][1];

    var intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

// Fetch data from the API using d3.json
d3.json('http://127.0.0.1:5000/api/v1.0/evs').then(data => {
  // Process the API data to calculate the total registrations per year
  const registrationsByYear = {};

  data.forEach(entry => {
    const year = entry.Year;
    const registrations = entry.Registrations;

    // If the year is not already in the registrationsByYear object, initialize it
    if (!registrationsByYear[year]) {
      registrationsByYear[year] = 0;
    }

    // Add the registrations for the current entry to the total for the year
    registrationsByYear[year] += registrations;
  });

  // Extract years and registrations from the registrationsByYear object
  const years = Object.keys(registrationsByYear);
  const totalRegistrations = Object.values(registrationsByYear);

  // Create a bar chart using Plotly
  const plotData = [{
    x: years,
    y: totalRegistrations,
    type: 'bar',
    text: totalRegistrations.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
      color: 'rgb(0, 128, 255)',
      opacity: 0.7,
    }
  }];

  const layout = {
    title: 'Total Number of Cars Registered per Year in NSW',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Total Registrations'
    }
  };

  Plotly.newPlot('barChart', plotData, layout);
});