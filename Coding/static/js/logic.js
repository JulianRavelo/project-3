// Creating the map object
let myMap = L.map("map", {
  center: [-31.2532, 146.9211],
  zoom: 6
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Links to get the GeoJSON data.
let link = "Resources/suburb-2-nsw.geojson";
let evChargers = "Resources/ev_evc_prototype.json";

// Get the data with d3.
// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);

  L.geoJSON(data, {
    style: function (feature) {
        return {
            fillColor: 'red',
            color: 'black',
            weight: 2,
            fillOpacity: 0.3
        };
    }
  }).addTo(map);
});

d3.json(evChargers).then(function(response) {

  //console.log(response);
  features = response;
  console.log(features[0].latitude);
  //console.log(features);

  // Comment this line in to render all 80,000 markers
  // let marker_limit = features.length;
  let marker_limit = 1000;

  for (let i = 0; i < marker_limit; i++) {

    let location = features[i];
    if(location){
      L.marker([location.latitude, location.longitude]).addTo(myMap);
    }

  }

});
