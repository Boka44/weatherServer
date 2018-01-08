// const express = require('express');
// const app = express();
// const router = express.Router();

// var db = require('../../db');
// var locationRequire = require('../../location');

// var Location = locationRequire.Location;


// User Clicks on city and brings up weather data for city
// 1. send to server, city name
// 2. compare to database
// 3. send info back


// app.get('/city/:city', (req, res)=>{
//   // connect to database and get city from database
  
//   Location.findOne({ city: `${req.params.city}` }, 'city data',  (err, location) => {
//     if(err){
//       res.status(200).send(err);
//     } 
//     console.log(location.data)
//     res.send(location.data)
//   })

// });
	

	

// module.exports = router;
