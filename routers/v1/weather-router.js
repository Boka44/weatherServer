const express = require('express');
const router = express.Router();

var db = require('../../db');


/*
User Clicks on city and brings up weather data for city
1. send to server, city name
2. compare to database
3. send info back
*/

router.get('/:city_name', (req, res)=>{
  // connect to database ane get city from database
  
})

module.exports = router;
