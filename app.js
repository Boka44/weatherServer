//app.js

var express = require('express');
var app = express();
var db = require('./db');

var LocationController = require('./locationController');
app.use('./user', LocationController)

module.exports = app;