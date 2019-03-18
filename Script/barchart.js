// this function should create a barchart

function createBarChart(volDict, volas){
  
console.log("first time BAR CHART")
var barPadding = 5.5;

// set the dimensions and margins of the graph
var margin = {top: 50, right: 20, bottom: 100, left: 40},
    width = 400 - margin.left - margin.right,
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
    .attr("font-family", "sans-serif")  
    .style('fill', '#6d8891')
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

var xScaleBin = d3.scaleLinear()
   .domain([0,3])
   .range([0, width]);


// creat Y axis
var yAxis = d3.axisLeft(yScale)

svg.append("g")
  	.attr("class", "yyaxis")
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
   .attr("x", function(d, i) {
      return xScaleBin(i);
   })
   .attr("y", function(d) {
      return yScale(d.Volatility);
   })
   .attr("width", (width / volas.length) - barPadding)
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

// set text
svg.selectAll(".textInVis")
   .data(volDict)
   .enter()
   .append("text")
   .attr("class", "textInVis")
   .text(function(d) {
      return d.Volatility + "%";
   })
   // .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
      return xScaleBin(i);
   })
   .attr("y", function(d) {
      return yScale(d.Volatility);
   })
   .attr("font-family", "sans-serif")
   .style('fill', '#6d8891')
   .attr("font-size", "16px");
}