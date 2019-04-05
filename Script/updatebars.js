// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// this file updates the barchart

function updateDataGraph(volDict, volas){

// create yScale
var yScale = d3.scaleLinear()
	.domain([0, d3.max(volDict, function(d){return d.Volatility})])
	.range([height, 0]); 

// create yAxis
var yAxis = d3.axisLeft(yScale)

// Select the section we want to apply our changes to
var svg = d3.select("#barCh").transition();

// Make the changes
svg.select(".yyaxis") // change the y axis
    .duration(750)
    .call(yAxis);


var bars = d3.select("#barCh").selectAll("rect").data(volDict);

// // Update old ones, already have x / width from before
bars
    .transition().duration(250)
    .attr("y", function(d,i) { return yScale(d.Volatility); })
    .attr("height", function(d,i) { return height - yScale(d.Volatility); });

var text = d3.select("#barCh").selectAll(".textInVis").data(volDict);

text.exit().remove();
text.enter().append("text").attr("class", "textInVis");

text
   	.transition().duration(250)
	.text(function(d) {
	      return d.Volatility + "%";
	})
    .attr("y", function(d) {
      return yScale(d.Volatility);
   	});

bars.exit().remove();
};