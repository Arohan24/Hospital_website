//Server.js
const express = require('express');
const app = express();
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

let port = process.env.PORT || 3001;

app.get('/', function(req, res){
   res.send(`<h2>Welcome to the API!</h2>`);  
});
