//server.js
'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const weatherRouter = require('./routers/v1/weather-router');
const { PORT } = require('./config');
const { areas, updateWeatherStore } = require('./locationController');
const app = express();
const db = require('./db');



var locationRequire = require('./location');
var Location = locationRequire.Location;

app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 

// app.use('/api/v1', weatherRouter);
app.route('/city/:city');
app.get('/city/:city', (req, res)=>{
  // connect to database and get city from database
  
  Location.findOne({ city: `${req.params.city}` }, 'city data',  (err, location) => {
    if(err){
      res.status(200).send(err);
    } 
    console.log(location.data)
    res.send(location.data)
  })

});
app.get('/', function(req, res) {
  res.send("Gold-blooded")
})
    
updateWeatherStore(areas);

setInterval(function() {
	updateWeatherStore(areas)
}, 1800000);

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

var server = app.listen(PORT, function () {
	console.log('Express server is running on port ' + PORT);
}).on('error', err => console.error(err));