//server.js
'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const weatherRouter = require('./routers/v1/weather-router');
const { PORT } = require('./config');

const app = express();

app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 

app.use('/api/v1', weatherRouter);


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