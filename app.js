//app.js

var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');

var LocationController = require('./locationController');


// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', LocationController);

// LocationController.updateWeatherStore(areas);

// setInterval(function() {
// 	LocationController.updateWeatherStore(areas)
// }, 1800000);
// var areas = LocationController.areas;

// LocationController.updateWeatherStore(areas);

module.exports = app;