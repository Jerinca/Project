// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// import jQuery

// This javascript file loads in data from an API




// when window is being unloaded show
window.onload = function() {

// // datasets
// var consConf = "https://stats.oecd.org/SDMX-JSON/data/HH_DASH/FRA+DEU+KOR+NLD+PRT+GBR.COCONF.A/all?startTime=2007&endTime=2015"
// var womenInScience = "https://stats.oecd.org/SDMX-JSON/data/MSTI_PUB/TH_WRXRS.FRA+DEU+KOR+NLD+PRT+GBR/all?startTime=2007&endTime=2015"

// // write them to jason
// var requests = [d3.json(consConf), d3.json(womenInScience)];


stringOne = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringTwo = "AAPL"
stringThree = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"


requestTicker = stringOne + stringTwo + stringThree
requestTickerTest = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

var requests = [d3.json(requestTicker), d3.json(requestTickerTest)];

// hold data
Promise.all(requests).then(function(response) {
  mydata = response;

  // transform into better format
  console.log(mydata)

}).catch(function(e){
    throw(e);
});

};

