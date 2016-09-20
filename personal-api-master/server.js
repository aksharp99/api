var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
// var occupations = [];
app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.use(cors());

var data = {
  hobbies: [{ "name": "Watching Cartoons", "type": "current"},{"name":"Quacking","type":"past"}]
}




app.get('/name', function(req, res) {
  res.status(200).json({name:"Donald Duck"});
})

app.get('/location', function(req, res) {
  res.status(200).json({location:"Timbuktu"});
})

app.get('/occupations', function(req, res) {
  res.status(200).json({occupations: ["Thwarting Buggs Bunny","Tomfoolery"]});
})

app.get('/occupations/latest', function(req, res) {
  res.status(200).json({latestOccupation: occupations[occupations.length-1]});
})

app.get('/hobbies', function(req, res) {
  res.status(200).json({hobbies: [{ "name": "Watching Cartoons", "type": "current"},{"name":"Quacking","type":"past"}]})
})

app.get('/hobbies/:type', function(req, res)  {
var empty = [];
  if(req.params.type === "current") {
    for(var i = 0; i < data.hobbies.length; i++) {
      if(data.hobbies[i].type === "current") {
        empty.push(data.hobbies[i])
      }
    }
    res.status(200).json(empty)
  }

})

app.listen(8989, function() {
  console.log('I is working');
})
