
//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object


app.use(express.json());
// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "csvjson (1).json", 'utf8', function(err, data){
        const jsonData = JSON.parse(data);
        console.log(req.query.link)
        
        var companies =jsonData.filter(element => {
           return  element.problem_link == req.query.link
        });
        console.log(companies)
        var ans = companies.map(element => element.company_name)
        console.log(ans)
        res.json(ans)
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})