movienamespromise = d3.json("http://ghibliapi.herokuapp.com/films");
moviedscrptnpromise = d3.json("http://ghibliapi.herokuapp.com/films")


movienamespromise.then(

 
    
    function(mvnms){
        
        entermvnms(mvnms)
      
       
        console.log("good", (mvnms))
    }
)

var clearshit = function ()
{
    d3.select("#mvactors")
    .remove()
}
var entermvnms = function (mvnms)
{
d3.select("#mvtitles")
.selectAll("ul")
.data(mvnms)
.enter()
.append("li")
.text(function (d){return d.title;})


}


moviedscrptnpromise.then(
    
    function(mvdscrptns){
        
        enterdscrptns(mvdscrptns)
        console.log("good", (mvdscrptns))

    }
)

var enterdscrptns =function (dscrptns)
{
    d3.select("#mvactors")
    .selectAll("ol")
    .data(dscrptns)
    .enter()
    .append("li")
    .text(function (d){return d.description})
    
    
}


