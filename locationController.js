//locationController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const request = require('request');

router.use(bodyParser.urlencoded({ extended: true }));

var locationRequire = require('./location');

var Location = locationRequire.Location;

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



 function updateWeatherStore(areas){

 	function removeMilitary(hours){

        if (hours > 0 && hours <= 12) {
            hours = "" + hours;
        } else if (hours > 12) {
            hours = "" + (hours - 12);
        } else if (hours === 0) {
            hours= "12";
        }
        return hours;
    }

 	function  timeConverter(tempTime) {
        var time = tempTime;
        var d = new Date(time);
        var hours = d.getHours();
        if (hours>=12){                 
                var suffix = "P.M.";}
            else{
                suffix = "A.M.";}
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();

        hours = removeMilitary(hours);

        var formattedTime = hours + ":" + minutes + " " + suffix;
        var formattedDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();


        return formattedDate + " / " + formattedTime;
    }
	console.log("\x1b[32m", timeConverter(Date.now()) + ':')
 	console.log("\x1b[0m", "Calling API and Updating Database.");
 	

	var max = areas.length;

	for(i = 0; i < max; i++){
		var temp = areas[i];
		var count = i + 1

		// console.log('for loop initiated');

		/**
		Calls the API uses the lat and long stored in areas[i].

		@params {object} temp - holds the current city and its corresponding lat and long.
		@return {object} weatherData - returns the JSON data rceived from the API.
		**/


		function getWeatherData(temp) {
			
			// console.log('getWeatherData started')
			
			var lat = temp.lat;
			var long = temp.long;
			var API_KEY = process.env.API_KEY;
			

			// console.log( lat + " " + long);

			var url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`
		
			// console.log(url)
			request({url: url, json: true}, function (err, res, body) {
				if(!err && res.statusCode === 200) {
					var weatherData = body
					// console.log(body)
					console.log(weatherData.daily.data)

					updateDB(weatherData, temp);
					
				}
			});
		}	

		getWeatherData(temp);

		
		
		/**
		This will update each city in thh database with the appropriate weather data.

		@params {object} res- passes the Dark Sy API data 
		@params {string} temp - holds the current city data
		**/
		function updateDB(weatherData, temp) {
			
			// console.log("updateDB started");

			var cityStore = temp.city;
			var tempData = weatherData;

			Location.findOneAndUpdate({ city: `${cityStore}` }, {$set: {data: tempData}},function(err, location){
				if(err){
					console.log(err);
				}
				
				
			});
		}
	}
	console.log("Success!")
	console.log("API Calls: " + count)

}




module.exports = {
	updateWeatherStore: updateWeatherStore,
	areas: areas
}
