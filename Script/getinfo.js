// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965


// This javascript file loads in data from an API
// And shows a graph about the data

// when window is being unloaded show
window.onload = function() {

// set the dimensions and margins of the graph
var margin = {top: 50, right: 20, bottom: 100, left: 40},
  width = 1140 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#svg").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")");

// get dataset
stringOne = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringThree = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

// keep track
var counter = 0;
var counterVol = 0;

// select search icon
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
    
    $.each(dailies, function(index, value) {
    var closingPrice = value["4. close"]
    hunderdDays.push({"Date": index, "Close": Number(closingPrice)});
    dates.push(index)
    }); 

    // now we have the dates in the right follow up
    hunderdDays.reverse();
    dates.reverse();

    // console.log(hunderdDays)
    // calculateVolatility(hunderdDays, dates);

    if (counter == 0){
    createLineChart(hunderdDays, dates)
    counter+=1;   
    }
    else {
    updateData(hunderdDays, dates)
    };
    });
    

function createLineChart(hunderdDays, dates){

  // console.log("first time")

  // create yScale
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(hunderdDays, function(d){return d.Close})])
    .range([height, 0]); 

  // create xScaleDate
  var xScaleDate = d3.scaleBand()
    .domain(dates)
    .range([0, width]);

  // create xScale
  var xScale = d3.scaleLinear()
    .domain([0,100])
    .range([0, width]);

  // create yAxis
  var yAxis = d3.axisLeft(yScale)


  // append yAxis on the left side
  svg.append("g")
    .attr("class", "yaxis")
    .call(d3.axisLeft(yScale));
            
  // add the xAxis
  svg.append("g")
    .attr("class", "xaxis")
    .attr("transform", "translate(-10," + height + ")")
    .call(d3.axisBottom(xScaleDate))
    .selectAll("text")
    .style("color", "#cda20b")
    .style("font", "8px times") 
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-90)");

  // create line
  line = d3.line()
    .x(function (d,i) { return xScale(i)})
    .y(function (d) { return yScale(d.Close)})

  // append path
  svg.append("path")
  .attr("class", "line")
    .datum(hunderdDays)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", line);

  // var focus = svg.append("g")
  //       .attr("class", "focus")
  //       .style("display", "none");

  //   focus.append("line")
  //       .attr("class", "x-hover-line hover-line")
  //       .attr("y1", 0)
  //       .attr("y2", height);

  //   focus.append("line")
  //       .attr("class", "y-hover-line hover-line")
  //       .attr("x1", width)
  //       .attr("x2", width);

  //   focus.append("circle")
  //       .attr("r", 7.5);

  //   focus.append("text")
  //       .attr("x", 15)
  //       .attr("dy", ".31em");

  //   svg.append("rect")
  //       .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  //       .attr("class", "overlay")
  //       .attr("width", width)
  //       .attr("height", height)
  //       .on("mouseover", function() { focus.style("display", null); })
  //       .on("mouseout", function() { focus.style("display", "none"); })
  //       .on("mousemove", mousemove);

  //   function mousemove() {
  //     var x0 = x.invert(d3.mouse(this)[0]),
  //         i = bisectDate(hunderdDays, x0, 1),
  //         d0 = hunderdDays[i - 1],
  //         d1 = hunderdDays[i],
  //         d = x0 - d0.dates > d1.dates - x0 ? d1 : d0;
  //     focus.attr("transform", "translate(" + x(d.Date) + "," + y(d.value) + ")");
  //     focus.select("text").text(function() { return d.value; });
  //     focus.select(".x-hover-line").attr("y2", height - y(d.value));
  //     focus.select(".y-hover-line").attr("x2", width + width);
  //   }

  calculateVolatility(hunderdDays, dates);
  }

function updateData(hunderdDays, dates){

// console.log("second and more")

  // create yScale
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(hunderdDays, function(d){return d.Close})])
    .range([height, 0]); 

  // create xScaleDate
  var xScaleDate = d3.scaleBand()
    .domain(dates)
    .range([0, width]);

  // create xScale
  var xScale = d3.scaleLinear()
    .domain([0,100])
    .range([0, width]);

  // create yAxis
  var yAxis = d3.axisLeft(yScale)

    // create line
  line = d3.line()
    .x(function (d,i) { return xScale(i)})
    .y(function (d) { return yScale(d.Close)})

  // Select the section we want to apply our changes to
  var svg = d3.select("svg").transition();

  // Make the changes
      svg.select(".yaxis") // change the y axis
          .duration(750)
          .call(yAxis);
      svg.select(".line")   // change the line
          .duration(750)
          .attr("d", line(hunderdDays))
          .on("click", function(d){
        
        });

  calculateVolatility(hunderdDays, dates);

  };




  function calculateVolatility(hunderdDays, dates){
    var returnList = [];
    var returnDaily = [];
    var sum = 0;
    var returnAverage = 0;
    var returnDay = 0;
 
    hunderdDays.forEach(function(element){  
      var priceClose = element["Close"]
      var dateStock = element["Date"]
      returnList.push([priceClose, dateStock])
    });

    var i;
    for (i = 0; i < 100; i++) { 
      console.log("calculate");
      if (i == 0){
        continue;
      }
      else{
        var oldStock = returnList[counterVol][0]
        var newStock = returnList[counterVol + 1][0]
        var returnDay = ((oldStock - newStock) / oldStock)
        sum+=returnDay
        counterVol+=1;
        returnDaily.push(Number(returnDay))  
      }
    }
    var averageReturn = (sum / 100);
    var sumPower = 0;
    var calculatedVariance = 0;
    var dictionairyVolatility = [];
    
    returnDaily.forEach(function(element){
      var difference = element - averageReturn
      var power = Math.pow(difference, 2)
      sumPower +=power;
      });

    calculatedVariance = sumPower * (1 / (100 - 1))

    var volatilityDaily = Math.sqrt(calculatedVariance);
    console.log(volatilityDaily)

    var volatilityYearly = Math.sqrt(251) * volatilityDaily
    console.log(volatilityYearly)

    var volatilityMonthly = volatilityYearly / Math.sqrt(12)
    console.log(volatilityMonthly)

    dictionairyVolatility.push({"TimePeriod": "Daily-Volatility", "Volatility": volatilityDaily})
    dictionairyVolatility.push({"TimePeriod": "Monthly-Volatility", "Volatility": volatilityMonthly})
    dictionairyVolatility.push({"TimePeriod": "Yearly-Volatility", "Volatility": volatilityYearly})

    var volatilities = ["Daily-Volatility", "Monthly-Volatility", "Yearly-volatility"]


    console.log(dictionairyVolatility)

    createBarChart(dictionairyVolatility, volatilities)
  }
  function createBarChart(volDict, volas){
    // width and height svg and bar padding
  var w = 800;
  var h = 600;
  var barPadding = 4.5;


    console.log("joe")
// set the dimensions and margins of the graph
  var margin = {top: 50, right: 20, bottom: 100, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
            
  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#barCh").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

  svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .text("Daily, Monthly and Yearly Volatilities");

  // set color range  
    var colors = d3.scaleLinear()
        .domain([0, 2])
        .range(['#cda20b', '#dfe6ea']);


  // create tooltip with style
  var tooltip = d3.select("body").append("div")
    .style('position','absolute')
    .style('background','#f4f4f4')
    .style('padding','5 15px')
    .style('border','1px #333 solid')
    .style('border-radius','5px')
    .style('opacity','0');

  // create yScale
    var yScale = d3.scaleLinear()
             .domain([0, d3.max(volDict, function(d){return d.Volatility})])
             .range([height, 0]); 

  // create xScale
  var xScale = d3.scaleBand()
           .domain(volas)
           .range([0, width]);

   // creat Y axis
   var yAxis = d3.axisLeft(yScale)

    svg.append("g")
        .call(d3.axisLeft(yScale));
            

    // add the x Axis
    svg.append("g")
      .attr("transform", "translate(-10," + height + ")")
      .call(d3.axisBottom(xScale))
      .selectAll("text")
        .style("font", "8px times") 
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", ".15em")
          .attr("transform", "rotate(-90)");


    // create bins and hover
    svg.selectAll("rect")
       .data(volDict)
       .enter()
       .append("rect")
       .attr("fill", function(d, i){
          return colors(i);
       })
       .attr("x", function(d) {
          console.log(xScale)
          return xScale(d.TimePeriod);
       })
       .attr("y", function(d) {
          return yScale(d.Volatility);
       })
       .attr("width", width / volas.length + barPadding)
       .attr("height", function(d) {
          return height - yScale(d.Volatility);
       })
       .on('mouseover', function(d){
        tooltip.transition()
          .style('opacity', 1)

        tooltip.html(d.Volatility)
          .style('left', (d3.event.pageX)+ 'px')
          .style('top', (d3.event.pageY)+ 'px')

        d3.select(this).style('opacity', 0.5)
      })
       .on('mouseout', function(d){
        tooltip.transition()
          .style('opacity', 0)
        d3.select(this).style('opacity', 1)
       })
       // .on("click", function(d){
       //  makePie(d.Country, d.HPIrank, d.AverageLifeExpectancy, d.Region, worldAverage, d.Population, sum, populationtot, uberData2);
       // })

    // set text
    svg.selectAll(".textInVis")
       .data(volDict)
       .enter()
       .append("text")
       .text(function(d) {
          return d.Volatility;
       })
       // .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
          return xScale(d.TimePeriod);
       })
       .attr("y", function(d) {
          return yScale(d.Volatility);
       })
       .attr("font-family", "sans-serif")
       .attr("font-size", "8px");
  }



  // // Define the div for the tooltip
  // var div = d3.select("body").append("div") 
  //     .attr("class", "tooltip")       
  //     .style("opacity", 0);


  //     // Add the scatterplot
  //   svg.selectAll("dot")  
  //       .data(hunderdDays)     
  //   .enter().append("circle")               
  //       .attr("r", 5)   
  //       .attr("cx", function(d) { return x(d.Date); })     
  //       .attr("cy", function(d) { return y(d.Close); })   
  //       .on("mouseover", function(d) {    
  //           div.transition()    
  //               .duration(200)    
  //               .style("opacity", .9);    
  //           div .html(formatTime(d.Date) + "<br/>"  + d.Close)  
  //               .style("left", (d3.event.pageX) + "px")   
  //               .style("top", (d3.event.pageY - 28) + "px");  
  //           })          
  //       .on("mouseout", function(d) {   
  //           div.transition()    
  //               .duration(500)    
  //               .style("opacity", 0); 
  //       });















}).catch(function(e){
    throw(e);
});
};
};






