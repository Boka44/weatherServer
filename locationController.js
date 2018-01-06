//locationController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

var Location = require('./location');

/** 
Array where I store the latitude and longitude for each city
**/

const areas = [

	{ 
		'city': 'sanFran',
		'lat': 37.773972,
		'long': -122.431297
	}, 
	{ 
		'city': 'losAngeles',
		'lat': 34.052235,
		'long': -118.243683
	}, 
	{
		'city': 'portland',
		'lat': 45.512794,
		'long': -122.679565
	}, 
	{
		'city': 'seattle',
		'lat': 47.608013,
		'long': -122.335167
	}
]

/** 
Updates the API every 30 minutes by calling the Dark Sky API and
storing it in the database.

Uses a for loop to call the API and stored the weatherData into the database
for each city in the array areas.

@params {object} areas - passes the city data.


**/

router.all('/', function(req, res) {

 function updateWeatherStore(areas){


	var max = areas.length;

	for(i = 0; i < max; i++){
		var temp = areas[i];

		/**
		Calls the API uses the lat and long stored in areas[i].

		@params {object} temp - holds the current city and its corresponding lat and long.
		@return {object} weatherData - returns the JSON data rceived from the API.
		**/


		function getWeatherData(temp) {
			
			
			var lat = temp.lat;
			var long = temp.long;

			var request = `https://api.darksky.net/forecast/926bb6de03f1ae8575d48aaeb2fc9b83/${lat},${long}`
		
			router.get(request, function (req, res) {
				var weatherData = " ";

				res.on('data', function(data) {
					weatherData = data;

					console.log("Weather Data: " + data)
				})
				updateDB(weatherData, temp);
			});
		}	

		getWeatherData(temp);

		
		
		/**
		This will update each city in teh database with the appropriate weather data.

		@params {object} res- passes the Dark Sy API data 
		@params {string} temp - 
		**/
		function updateDB(weatherData, temp) {
			
			var city = temp.city;

			
			Location.find({ location: temp.city }, function(err, location) {
			  if (err) throw err;

			  location.data = weatherData;

			  location.save(function(err) {
			  	if (err) throw err;

			  	console.log(temp.city + ' updated!');
			  })
			  // object of the location
			  console.log(location);
			});

		}
		// getWeatherData(temp).then(updateDB(weatherData)).then(console.log('Success!'));

		

	}
}

updateWeatherStore(areas);

})


// updateWeatherStore(areas);

// console.log("Working-ish")
// setInterval(function() {
// 	updateWeatherStore(areas)
// }, 1800000);

/**
This will process each client request and send the appropriate data to the client.
**/
// router.post('/');

// module.exports = {
// 	updateWeatherStore: updateWeatherStore(areas),
// 	areas: areas
// }
module.exports = router;