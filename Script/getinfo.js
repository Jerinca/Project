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

// keep track
var counter = 0;
var counterVol = 0;
var counterPage = 0;
var inputSearch;

// when window is being unloaded show
window.onload = function() {

// call 'sort'-function when radio button is clicked
d3.select("#sorting-radio1").on("click", doeHonderd);
d3.select("#sorting-radio2").on("click", doeTwintig);

function doeHonderd() {
  console.log("okeoke")

}
function doeTwintig(){
  console.log("jaja")
}

// create the right space
list = []
dictionairy = {"children":[]}

// load csv file to d3 v5    
d3.csv('weights.csv')
    .then(function(data) {
      data.forEach(function(element){
        var companyCompany = element["Company"]
        var weigthsCompany = element["Weight"]
        var symbolCompany = element["Symbol"]
        dictionairy["children"].push({"Company": companyCompany, "Weight": Number(weigthsCompany), "Symbol": symbolCompany});
      });
    // create bubble chart
    getBubbles(dictionairy)
  });

// get dataset
stringOne = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringThree = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

// get starting page with s&p500 info
requestTickerSP = stringOne + "MSFT" + stringThree
getData(requestTickerSP)

// select search icon and on click get data input
d3.select("#sic")
    .on("click", function() {
    inputSearch = d3.select("#sin").property("value");
    console.log(inputSearch)
    getData(inputSearch)    
    });

// selecht search icon on enter and get data input
$("#sin").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#sic").click();
  }
});

$("#sic").click(function() {
  var inputSearch = d3.select("#sin").property("value");
  getData(inputSearch) ;
});

function getData(input){
  if (counterPage == 0){
    requestTickerSP = input
    writeToJson(requestTickerSP)
    counterPage += 1;
  }
  else {
    requestTicker = stringOne + input + stringThree
    console.log(requestTicker)
    writeToJson(requestTicker)
  };  
  }
};

function writeToJson(request){
  var requests = [d3.json(request)];

  // hold data
  Promise.all(requests).then(function(response) {

  mydata = response;

  mydata.forEach(function(element){
    var dailies = element["Time Series (Daily)"]
    var hunderdDays = [];
    var dates = [];
    var symbolDict = element["Meta Data"]["2. Symbol"];

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
      createLineChart(hunderdDays, dates, symbolDict)
      createBarChart(dictionairyVolatility, volatilities)
      counter+=1;   
    }

    // second time searching update graphs
    else {

      // update the line graph and barchart 
      updateDataLine(hunderdDays, dates, symbolDict)
      updateDataGraph(dictionairyVolatility, volatilities)
    };
  });
}).catch(function(e){
    throw(e);
});
};




