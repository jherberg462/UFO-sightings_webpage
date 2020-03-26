# UFO Sightings Webpage

## Goals

For this project, I wanted to create a webpage that displays and filters (presumed to be fictional) data about UFO sightings in January 2010 using JavaScript. 

## Process

The data I have is an array of JSON arrays, so I used d3 to read in my data. I used d3 to create a row for each JSON array in the array in my dataset, and the key values in each JSON object in each JSON array were input as the value of the cells of the above-created row in a table that exists within the HTML. I created an event listener that listens for a button click that will call a function that will select the value of a user input field, will filter the data based on the input, and will first clear the table, then repeat the above process with only rows from the filtered data

## Deployment

The website application can be accessed at https://ufo-sighting-jh.herokuapp.com 

I created a flask app that uses the render_template function that returns a HTML file on the base route, and routes that return each js file and CSS file that the HTML file relies upon. 
