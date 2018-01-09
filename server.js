//server.js
'use strict';

require('dotenv').config()
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { areas, updateWeatherStore } = require('./locationController');
const app = express();
const db = require('./db');
const locationRequire = require('./location');

const PORT = process.env.PORT || 8080;
var Location = locationRequire.Location;

app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 

/**
Receives a GET request then process the city received with what we have in the database.
Sends back the appropriate weather data. 
**/

app.route('/city/:city');
app.get('/city/:city', (req, res)=>{
  
  Location.findOne({ city: `${req.params.city}` }, 'city data',  (err, location) => {
    if(err){
      res.status(200).send(err);
    } 
    console.log(location.data)
    res.send(location.data)
  })

});

/**
Test ran by a 49er faithful.
**/

app.get('/', function(req, res) {
  res.send("Niners Super Bowl 2019")
})

/**
Calls the first time the server is ran
**/
    
updateWeatherStore(areas);

/**
Calls updateWeatherStore every 30 minutes
**/

setInterval(function() {
	updateWeatherStore(areas)
}, 1800000);

/**
Handles errors
**/

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

var server = app.listen(PORT, function () {
	console.log('Express server is running on port ' + PORT);
}).on('error', err => console.error(err));