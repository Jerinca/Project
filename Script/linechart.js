function createLineChart(hunderdDays, dates){

  console.log("first time LINE")

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

//      // 12. Appends a circle for each datapoint 
// svg.selectAll(".dot")
//     .data(hunderdDays)
//   .enter().append("circle") // Uses the enter().append() method
//     .attr("class", "dot") // Assign a class for styling
//     .attr("cx", function (d,i) { return xScale(i)})
//     .attr("cy", function (d) { return yScale(d.Close)})
//     .attr("r", 5)
//     .style("opacity", 0)
//       .on("mouseover", function(d) { 
//       	d3.select(this)
//       	.style("opacity", 1) 
// 		})
//       .on("mouseout", function(d) { 
//       	d3.select(this)
//       	// .transistion()
//       	// .duration(500)
//       	.style("opacity", 0)
//         })
//        .on("click", function(){console.log("JOE")
//    })


       

   //  // calculateVolatility(hunderdDays, dates);
  	// d3.select(".line")
  	//     .on("click", function(){console.log("clicked??")
   //      });

    // svg.append("rect")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    //     .attr("class", "overlay")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .on("mouseover", function() { focus.style("display", null); })
    //     .on("mouseout", function() { focus.style("display", "none"); })
    //     .on("mousemove", mousemove);

    // function mousemove() {
    //   var x0 = xScale.invert(d3.mouse(this)[0]),
    //       i = bisectDate(hunderdDays, x0),
    //       d0 = hunderdDays[i - 1],
    //       d1 = hunderdDays[i],
    //       d = x0 - d0.dates > d1.dates - x0 ? d1 : d0;

    //   focus.attr("transform", "translate(" + x(d.Date) + "," + y(d.value) + ")");
    //   focus.select("text").text(function() { return d.value; });
    //   focus.select(".x-hover-line").attr("y2", height - y(d.value));
    //   focus.select(".y-hover-line").attr("x2", width + width);
    // }

  // calculateVolatility(hunderdDays, dates);
  }