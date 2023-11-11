// Create an array of each state numbers
let NSW = Object.values(data.NSW);
let QLD = Object.values(data.QLD);
let SA = Object.values(data.SA);
let TAS = Object.values(data.TAS);
let VIC = Object.values(data.VIC);

// Create an array of category labels
let labels = Object.keys(data.NSW);

// Display the default plot
function init() {
  let data = [{
    values: NSW,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getdata);

// Function called by DOM changes
function getdata() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the state's data
  let data = [];

  if (dataset == 'NSW') {
      data = NSW;
  }
  else if (dataset == 'QLD') {
      data = QLD;
  }
  else if (dataset == 'SA') {
      data = SA;
  }
  else if (dataset == 'TAS') {
    data = TAS;
  }
  else if (dataset == 'VIC') {
      data = VIC;
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
