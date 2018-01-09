[![Build Status](https://travis-ci.org/Boka44/weatherServer.svg?branch=master)](https://travis-ci.org/Boka44/weatherServer)


The weatherServer will call the Dark Sky API every 30 minutes, receiving up to 20 cities weather data and storing it into my own API using MongoDB. 

The client application will be able to request current weather for a specific city, and receive the correct weather data.

Every 30 minutes the server will receive updated weather data and update the API.

Client app will have a unique weather page for each city.



Edit: 1/8/2017

Success! Server will be deployed on heroku. 

Server accepts weather requests in the form of 

GET ('.../city/:city', callback)
replace :city with either sanFran, seattle, portland, or losAngeles.

Weather data is updated every 30 minutes.

Returns weather data in JSON. Console.log the returned data to view the data.

Stack:
	Node
	Express
	MongoDB
	Mongoose

Tests: 
	Mocha
	Chai
	.travis.yml
	Postman

Dependencies:
    "body-parser": "^1.18.2",
    "chai-http": "^3.0.0",
    "dotenv": "^4.0.0",
    "express": "^4.16.2",
    "mongoose": "^5.0.0-rc1",
    "morgan": "^1.9.0",
    "request": "^2.83.0",
    "chai": "^4.1.2",
    "mocha": "^4.1.0",
    "nodemon": "^1.14.7"

