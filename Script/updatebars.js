// this file should update barchart

function updateDataGraph(volDict, volas){

	console.log("second and more UPDATE BINS")

	// // create yScale
	// var yScale = d3.scaleLinear()
	//  .domain([0, d3.max(volDict, function(d){return d.Volatility})])
	//  .range([height, 0]); 

	// // create yAxis
	// var yAxis = d3.axisLeft(yScale)

	// // Select the section we want to apply our changes to
	// var svg = d3.select("svg");
	// var joe = svg.select("g").transition();
 //  // Make the changes
 //  joe.select(".yyaxis") // change the y axis
 //      .duration(750)
 //      .call(yAxis);

// var updateBars = function(data) {

    // First update the y-axis domain to match data
    // yScale.domain( d3.extent(volDict, function(d){return d.Volatility}) );
    // yAxisHandleForUpdate.call(yAxis);

    // var bars = canvas.selectAll(".rect").data(data);

//     // Add bars for new data
//     bars.enter()
//       .append("rect")
//         .attr("class", "bar")
//         .attr("x", function(d,i) { return xScale( nutritionFields[i] ); })
//         .attr("width", xScale.rangeBand())
//         .attr("y", function(d,i) { return yScale(d); })
//         .attr("height", function(d,i) { return height - yScale(d); });

//     // Update old ones, already have x / width from before
//     bars
//         .transition().duration(250)
//         .attr("y", function(d,i) { return yScale(d); })
//         .attr("height", function(d,i) { return height - yScale(d); });

//     // Remove old ones
//     bars.exit().remove();
// };

}