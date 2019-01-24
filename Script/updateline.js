// this should update line graph
function updateDataLine(hunderdDays, dates){

console.log("second and more UPDATE LINE")

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
      .attr("d", line(hunderdDays));
  // svg.select(".dot")
  // 	  .duration(750)
  //     .attr("d", line(hunderdDays));


  // // on click ...... do something
  // d3.select(".line")
  // 	      .on("click", function(){console.log("clicked??")
  //       });



  };