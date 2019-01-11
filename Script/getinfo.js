// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965


// This javascript file loads in data from an API
// And shows a graph about the data

// when window is being unloaded show
window.onload = function() {

// get dataset
stringOne = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringTwo = "AAPL"
stringThree = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

// d3.select("search_icon").onclick = function() {
//   var inputSearch = d3.select("search_input").value;
//   console.log(inputSearch)
// }

// var hey = d3.getElementById("sin").value;
// console.log(hey)



d3.select("#sic")
      .on("click", function() {
        console.log("clicked on search button")
        var inputSearch = d3.select("#sin").property("value");
        getData(inputSearch)
        console.log(inputSearch)

        // var date = this.getAttribute("value");
      });

function getData(input){
  console.log(input)
  requestTicker = stringOne + input + stringThree
  writeToJson(requestTicker)


}
// console.log(inputSearch)
// function myFunction(){
//   console.log("yo")
// };


// requestTicker = stringOne + stringTwo + stringThree
requestTickerTest = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

function writeToJson(request){
  var requests = [d3.json(request), d3.json(requestTickerTest)];
// hold data
Promise.all(requests).then(function(response) {
  mydata = response;
  mydatajoe = response[0];
  console.log(mydatajoe)

  // transform into better format
  console.log(mydata)

  d3.select("search_icon").onclick = function() {
  var inputSearch = d3.select("search_input").value;
  console.log(inputSearch)
}

  mydata.forEach(function(element){
    console.log(element)
    // console.log(element["Time Series (Daily)"]["2018-03-02"])
    // save this in variable
    // do another for loop 
    // then you can get all the values
    // save them in a list
    console.log(element["Time Series (5min)"])

    
   });


}).catch(function(e){
    throw(e);
});

};
}

// stringtwo has to contain the request from the user. that Needs to be checked (if ticker symbol exists)
// var requests = [d3.json(requestTicker), d3.json(requestTickerTest)];

// // hold data
// Promise.all(requests).then(function(response) {
//   mydata = response;
//   mydatajoe = response[0];
//   console.log(mydatajoe)

//   // transform into better format
//   console.log(mydata)

//   d3.select("search_icon").onclick = function() {
//   var inputSearch = d3.select("search_input").value;
//   console.log(inputSearch)
// }

//   mydata.forEach(function(element){
//     console.log(element)
//     // console.log(element["Time Series (Daily)"]["2018-03-02"])
//     // save this in variable
//     // do another for loop 
//     // then you can get all the values
//     // save them in a list
//     console.log(element["Time Series (5min)"])

    
//    });


// }).catch(function(e){
//     throw(e);
// });

// };



