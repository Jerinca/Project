// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// This file creates a bubble

function getBubbles(dictionairy){

// get dataset
stringOneB = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringThreeB = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"

// set diameter and set colorscheme
var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory10);

// give data to bubbles
var bubble = d3.pack(dictionairy)
    .size([diameter, diameter])
    .padding(1.5);

// select canvas
var svg = d3.select("#bubbleCh")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

// create nodes with eight
var nodes = d3.hierarchy(dictionairy)
    .sum(function(d) { return d.Weight; });

// give nodes data
var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function(d){
        return  !d.children
    })
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")"
    })
    
// append title company + weight in mouseover
node.append("title")
    .text(function(d) {
        return d.data.Company + ": W = " + d.data.Weight;
    });

// set circle color and diameter
node.append("circle")
    .attr("r", function(d) {
        return d.r;
    })
    .style("fill", function(d,i) {
        return color(i);
    });

// append substring
node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Company.substring(0, d.r / 3);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

// append weight of company
node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return "W: " + d.data.Weight;
    })
    .attr("font-family",  "Gill Sans", "Gill Sans MT")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

// on click update graphs
node.on('click', function(d) {
        var symbolCompany = d.data.Symbol
        
        // get starting page with s&p500 info
        requestTickerSPB = stringOneB + symbolCompany + stringThreeB
        writeToJson(requestTickerSPB)
    });

d3.select(self.frameElement)
    .style("height", diameter + "px");
};


