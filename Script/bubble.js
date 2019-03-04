dictionairy = []

// load csv file to d3 v5    
d3.csv('weights.csv')
  .then(function(data) {

    data.forEach(function(element){
      var companyCompany = element["Company"]
      var weigthsCompany = element["Weight"]
      dictionairy.push({"childeren": [{"Company": companyCompany, "Weight": Number(weigthsCompany)}]});
    });

	console.log(dictionairy)

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dictionairy)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("body")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var nodes = d3.hierarchy(dictionairy)
    .sum(function(d) { return d.Weight; });

var node = svg.selectAll(".node")
    .dictionairy(bubble(nodes).descendants())
    .enter()
    .filter(function(d){
        return  !d.children
    })
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
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
        return d.dictionairy.Company.substring(0, d.r / 3);
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
        return d.dictionairy.Weight;
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
            .dictionairy(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });



  });

