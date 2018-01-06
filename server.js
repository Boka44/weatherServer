//server.js

var app = require('./app');

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
	console.log('Express server is running on port ' + port);
})