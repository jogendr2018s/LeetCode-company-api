
//REST API demo in Node.js
require("dotenv").config()
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object


app.use(express.json());
// Endpoint to Get a list of users
app.get('/', function(req, res){
    fs.readFile(__dirname + "/" + "csvjson (1).json", 'utf8', function(err, data){
        const jsonData = JSON.parse(data);
        var companies =jsonData.filter(element => {
           return  element.problem_link == req.query.link
        });
        console.log(companies)
        var ans = companies.map(element => element.company_name)
        console.log(ans)
        res.json(ans)
    });
})
const PORT = process.env.PORT || 8080
// Create a server to listen at port 8080
app.listen(PORT, function(){
    console.log("server running....")
})