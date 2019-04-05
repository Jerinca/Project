// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// This javascript file creates a line chart

function createLineChart(hunderdDays, dates, inputsearch){

  console.log(hunderdDays, dates, inputsearch)

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

var svg = d3.select("#lineCh").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// append yAxis on the left side
svg.append("g")
    .attr("class", "yaxis")
    .call(d3.axisLeft(yScale));

// text label for the y axis
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -2 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Stock Price in $")
    .attr("font-family", "sans-serif")  
    .style('fill', '#6d8891');

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

// text label for the x axis
svg.append("text")             
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                         (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Date (Past 100 days)")
    .style("font-size", "16px") 
    .attr("font-family", "sans-serif")  
    .style('fill', '#6d8891');

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

var focus = svg.append("g")
    .attr("class", "focus")
    .style("display", "none");

focus.append("line")
    .attr("class", "x-hover-line hover-line")
    .attr("y1", 0)
    .attr("y2", height);

focus.append("line")
    .attr("class", "y-hover-line hover-line")
    .attr("x1", width)
    .attr("x2", width);

focus.append("circle")
    .attr("r", 7.5);

focus.append("text")
    .attr("x", 15)
    .attr("dy", ".31em");

svg.append("text")
    .attr("x", (width / 2))             
    .attr("y", 0 - (margin.top / 2))
    .attr("class", "symbolstock")
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .attr("font-family", "sans-serif")  
    .style('fill', '#6d8891')
    .style("text-decoration", "underline")  
    .text("Closing Stock Prices past 100 days " + inputsearch);

// svg.append("text2")
//     .attr("x", (width / 3))             
//     .attr("y", 0 - (margin.top / 2))
//     .attr("text-anchor", "middle")  
//     .style("font-size", "16px") 
//     .attr("font-family", "sans-serif")  
//     .style('fill', '#6d8891')
//     .style("text-decoration", "underline")  
//     .text("Closing Stock Prices past 100 days" + inputsearch);
};