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


//Creating a Function to take input date and filter as entries as per input
function handleClick() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filtereddate = tableData.filter(sighting => sighting.datetime === inputValue);
    buildTable(filtereddate);
}
d3.selectAll("#filter-btn").on("click", handleClick);