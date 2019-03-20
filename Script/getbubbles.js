function getBubbles(dictionairy){

// get dataset
stringOneB = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
stringThreeB = "&interval=5min&apikey=DFYSSV5T3EZ9UW6E"


var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory10);

var bubble = d3.pack(dictionairy)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#bubbleCh")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var nodes = d3.hierarchy(dictionairy)
    .sum(function(d) { return d.Weight; });

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
    .on('click', function(d) {
    var symbolCompany = d.data.Symbol
    console.log("You clicked")
    console.log(symbolCompany)
    
    // get starting page with s&p500 info
    requestTickerSPB = stringOneB + symbolCompany + stringThreeB
    console.log(requestTickerSPB)
    writeToJson(requestTickerSPB)
    });

node.append("title")
    .text(function(d) {
        return d.Company + ": " + d.Weight;
    });

node.append("circle")
    .attr("r", function(d) {
        return d.r;
    })
    .style("fill", function(d,i) {
        return color(i);
    });

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

node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Weight;
    })
    .attr("font-family",  "Gill Sans", "Gill Sans MT")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

d3.select(self.frameElement)
    .style("height", diameter + "px");


var color = d3.scaleOrdinal(d3.schemePaired);

var bubble = d3.pack(dictionairy)
            .size([diameter, diameter])
            .padding(1.5);

var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

// node.on('click', function(d) {
//   console.log("You clicked");
// });

  };


