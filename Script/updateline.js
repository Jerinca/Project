// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// this file updates the line graph

function updateDataLine(hunderdDays, dates, inputsearch){

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
var svg = d3.select("#lineCh").transition();

// Make the changes
svg.select(".yaxis") // change the y axis
    .duration(750)
    .call(yAxis);
svg.select(".line")   // change the line  
    .duration(750)
    .attr("d", line(hunderdDays));
svg.select(".symbolstock")  
    .duration(750)
    .attr("x", (width / 2))             
    .attr("y", 0 - (margin.top / 2))
    .attr("class", "symbolstock")
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .attr("font-family", "sans-serif")  
    .style('fill', '#6d8891')
    .style("text-decoration", "underline")  
    .text("Closing Stock Prices past 100 days " + inputsearch)  
};