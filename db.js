//db.js
var mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://weatherAPI:Guitar101!@ds239387.mlab.com:39387/weatherapi')

console.log('Connected!')