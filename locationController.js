//locationController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser,urlencoded({ extended: true }));

var Location = require('./location');

/** 
Object where I store the latitude and longitude for each city
**/

const areas = {
	'san fran': {
		'lat': ,
		'long': 
	}, 
	'los angeles': {
		'lat': ,
		'long': 
	}, 
	'portland': {
		'lat': ,
		'long': 
	}, 
	'seattle': {
		'lat': ,
		'long': 
	}
}

/** 
Updates the API every 30 minutes by calling the Dark Sky API and
storing it in the database.

Probably use a for loop and use the areas as an array.

@params {string} area - passes the city data.

**/

updateWeatherStore(areas){


	/**
	Here is where we will set up an API call every 30 minutes for each city

	@return {object} data - returns the Dark Sky API data
	**/
	getWeatherData(){
		router.get('/');
	}
	/**
	This will update each city in teh database with the appropriate weather data.

	@params {object} data- passes the Dark Sy API data 
	**/
	updateDB(data) {
		router.put('/');
	}
}


/**
This will process each client request and send the appropriate data to the client.
**/
router.post('/');


