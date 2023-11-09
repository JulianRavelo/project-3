mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFucmF2ZWxvIiwiYSI6ImNsb213c2k0NDB6OXgya25yYW5vdzkwbGoifQ.DGQwMzAqLexmpjlBYRm-Lg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [146.9211, -31.2532],
  zoom: 4
});

// Load the GeoJSON data
map.on('load', function () {
    map.addSource('geojson-data', {
      type: 'geojson',
      data: 'Resources/final_nsw.geojson' // Path to your GeoJSON file
    });


    map.addLayer({
      id: 'geojson-layer',
      type: 'fill', // Change to 'circle' or 'line' for different data types
      source: 'geojson-data',
      paint: {
        'fill-color': 'blue',
        'fill-opacity': 0.3
      },
    });
    
    map.on('click', 'geojson-layer', (e) => {
      new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`<h2>Suburb: ${e.features[0].properties.nsw_loca_2} - ${e.features[0].properties.Postcode}</h2>
              <h3>Total of EV chargers: </h3>`)
      .addTo(map);
      });

    // Load the JSON file with marker data
    fetch('Resources/ev_evc_prototype.json')
    .then(response => response.json())
    .then(data => {
        // Add markers to the map
        data.forEach(marker => {
            new mapboxgl.Marker({
              icon: 'Resources/EV_marker.jpg'
              //color: '#ff0000',
              //size: [20, 20]
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