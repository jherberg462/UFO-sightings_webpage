var createTable = d3.select('tbody')
// create variable that will select the 'tbody' tag in the html code



//loop through each dictionary in the data variable (located in data.js)
data.forEach((UFOsighting) => {
    var row = createTable.append("tr");
    //adds a row
    Object.entries(UFOsighting).forEach(([key, value]) => {
        //add a cell and inputs the value for each key in the data var
      var cell = row.append("td");
      cell.text(value);
    });
  });

//create var that selects the filter button 
var button = d3.select("#filter-btn");
// function that handles a click on the above filter button 
button.on("click", function(){
  //variable for the datetime field 
  var dateField = d3.select("#datetime")
//var of the value of the above field 
  var newdate = dateField.property('value')
// filters the data based on what the user input
  var filterDate = data.filter(report => report.datetime === newdate)

  //clears the existing table html
  createTable.html('')
  //same loop as above that creates table, using the data from above filter instead of data var from data.js file
  filterDate.forEach((UFOsighting) => {
    var row = createTable.append("tr");
    //adds a row
    Object.entries(UFOsighting).forEach(([key, value]) => {
        //add a cell and inputs the value for each key in the data var
      var cell = row.append("td");
      cell.text(value);
    });
  });


})

