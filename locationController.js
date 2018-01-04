//locationController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser,urlencoded({ extended: true }));

var Location = require('./location');


const areas = ['san fran', 'los angeles', 'portland', 'seattle'];

updateWeatherStore(areas){
//For each area this should call the getLatLong() method and make the call to api

//Here is where we will set up an API call every 30 minutes for each city
router.get('/');

//This will update each city with the appropriate data.
router.put('/');

}

getLatLong(area){
// this should use google api to get the latitude and longitutde for the city hall / center of city for use in 
// which is returned to updateWeatherStore()
}


//This will process each client request and send the appropriate data to the client.
router.post('/');


