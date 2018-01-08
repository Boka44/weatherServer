var chai = require('chai');
var chaiHttp = require('chai-http');
var request = require('request')
var assert = chai.assert;

var should = chai.should();

chai.use(chaiHttp);


describe('GET', function() {
	it('should return the correct data JSON for each param', function() {

	cityName = 'sanFran'
	chai.request('http://localhost:8080')
		.get('/city/' + cityName, (req, res) => {
			
		})

		.end(function(err, res) {
			res.body.should.be.json;
			res.body.should.be.a('object');
			res.body.should.have.property('city').eql(cityName);
			res.body.should.have.property('data');
			res.body.should.have.property('test');
			
		})
		
	}) 
});