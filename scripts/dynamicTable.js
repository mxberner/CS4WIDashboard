let dataArray = [
  ["Data 1A", "Data 1B"],
  ["Data 2A", "Data 2B"],
  // Add more data rows here if needed
];

// Function to generate the table rows based on the array data
function generateTable() {
  let tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

  dataArray.forEach((dataRow) => {
    let row = document.createElement("tr");
    dataRow.forEach((data) => {
      let cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

// Function to change the array data and update the table
function changeData() {
  // Modify the array data here (for example, add or remove rows)
  dataArray.push(["New Data A", "New Data B"]);

  // Regenerate the table with updated data
  generateTable();
}

// Initial table generation
generateTable();

/*
generateTable() = function (props) {
    this._div.innerHTML = "<b>" + legend_text + "</b>";
    if (props) {
      this._div.innerHTML = "<b></b>";
      for (const [index, item] of legend_displayProperties.entries()) {
        if (props.hasOwnProperty(item)) {
          this._div.innerHTML += "<b>" + legend_displayLabels[index] + "</b>";
          this._div.innerHTML += "<b>" + props[item] + "</b>" + "</br>";
        }
      }
    }
  };*/
