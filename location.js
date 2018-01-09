//location.js
const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
	/**
	Here is where the locations will go. I'll create an value for each city
	in which the data will be stored and updated every 30 minutes.
	@value {string} location - the city. Will not be updated.
	@value {object} data - the Dark Sky API data for teh corresponding city 
		will be stored here and updated every 30 minutes.
	**/

	city: String,
	data: Object,
	test: Number
});
var Location = mongoose.model('Location', citySchema, "Locations");

module.exports = {Location: Location};