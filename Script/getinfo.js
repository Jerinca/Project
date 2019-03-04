// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// This javascript file loads in data from an API

// set variables and margins
var margin = {top: 50, right: 20, bottom: 100, left: 40},
  width = 1140 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;
          
// append the svg object to a selection of the page
var svg = d3.select("#svg").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")"); 

// when window is being unloaded show
window.onload = function() {

// keep track
var counter = 0;
var counterVol = 0;

// get dataset
stringOne = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringThree = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

// select search icon and on click get data
d3.select("#sic")
  .on("click", function() {
  var inputSearch = d3.select("#sin").property("value");
  getData(inputSearch)    
  });

function getData(input){
  requestTicker = stringOne + input + stringThree
  writeToJson(requestTicker)
  }


function writeToJson(request){
  var requests = [d3.json(request)];


  // hold data
  Promise.all(requests).then(function(response) {

  mydata = response;


mydata.forEach(function(element){
  var dailies = element["Time Series (Daily)"]
  var hunderdDays = [];
  var dates = [];
  
  // take each object and push as dictionairy
  $.each(dailies, function(index, value) {
    var closingPrice = value["4. close"]
    hunderdDays.push({"Date": index, "Close": Number(closingPrice)});
    dates.push(index)
    }); 

  // now we have the dates in the right follow up
  hunderdDays.reverse();
  dates.reverse();

  // save info about volatilities
  var infovol = calculateVolatility(hunderdDays, dates);
  dictionairyVolatility = infovol[0];
  volatilities = infovol[1];

  // if it is the first time searching
  if (counter == 0){

    // create bar chart and line graph first time
    createLineChart(hunderdDays, dates)

    console.log(dictionairyVolatility, volatilities)


    createBarChart(dictionairyVolatility, volatilities)

    counter+=1;   
  }

  // second time searching update graphs
  else {

    // update the line graph and barchart 
    updateDataLine(hunderdDays, dates)

    console.log(dictionairyVolatility, volatilities)

    updateDataGraph(dictionairyVolatility, volatilities)

  };

  });

}).catch(function(e){
    throw(e);
});
};
};






