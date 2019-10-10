movienamespromise = d3.json("http://ghibliapi.herokuapp.com/films");



movienamespromise.then(

    
    
    function(mvnms){
        
        entermvnms(mvnms)
        
        console.log("good", (mvnms))
    }
)
var entermvnms = function (mvnms)
{
d3.select("#movienames")
.selectAll("span")
.data(mvnms)
.enter()
.append("span")
}


