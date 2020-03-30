// from data.js
var tableData = data;

// YOUR CODE HERE!

const tbody = d3.select("tbody");

function buildTable(ufos) {
  tbody.html("");

  ufos.forEach(datarow => {
    const row = tbody.append("tr");

    Object.values(datarow).forEach(val => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
buildTable(tableData);

// Creating a Function to take input date and filter as entries as per input
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    var inputElement = d3.select("#input");

    var inputValue = inputElement.property("value");

    var filtereddata = tableData.filter(sighting => sighting.datetime === inputValue 
        || sighting.city === inputValue || sighting.state === inputValue 
        || sighting.country === inputValue || sighting.shape === inputValue);
        buildTable(filtereddata);

});



