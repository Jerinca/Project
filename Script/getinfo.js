// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// import jQuery

// This javascript file loads in data from an API




// when window is being unloaded show
window.onload = function() {

// // datasets



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

