//location.js
var mongoose = require('mongoose');
var LocationSchema = new mongoose.Schema({
	//Here is where the locations will go. I'll create an value for each city
	//in which the data will be stored and updated every 30 minutes.

	location: String,
	data: String
});
mongoose.model('Location', LocationSchema);

module.exports = mongoose.model('Location');