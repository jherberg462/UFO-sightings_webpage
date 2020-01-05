var createTable = d3.select('tbody')
// select the 'tbody' tag in the html code



//loop through each diction in the data variable (located in data.js)
data.forEach((UFOsighting) => {
    var row = createTable.append("tr");
    //adds a row
    Object.entries(UFOsighting).forEach(([key, value]) => {
        //add a cell and inputs the value for each key in the data var
      var cell = row.append("td");
      cell.text(value);
    });
  });