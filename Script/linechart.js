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

  }