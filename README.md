[![Build Status](https://travis-ci.org/Boka44/weatherServer.svg?branch=master)](https://travis-ci.org/Boka44/weatherServer)

# weatherServer

## weatherServer is live at [https://blooming-earth-34077.herokuapp.com](https://blooming-earth-34077.herokuapp.com)

Server accepts weather requests in the form of 

GET ('.../city/:city', callback)
replace :city with either sanFran, seattle, portland, or losAngeles.

Example: 
https://blooming-earth-34077.herokuapp.com/city/sanFran

* Returns JSON with Dark Sky weather API data for San Francisco.

---

The weatherServer will call the Dark Sky API every 30 minutes, receiving up to 20 cities weather data and storing it into my own API using MongoDB. 

The client application will be able to request current weather for a specific city, and receive the correct weather data.

Every 30 minutes the server will receive updated weather data and update the API.

Client app will have a unique weather page for each city.


## Stack:

* Node

* Express

* MongoDB

* Mongoose

## Tests: 

* Mocha

* Chai

* .travis.yml

* Postman
