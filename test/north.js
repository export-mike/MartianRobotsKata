var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var North = require('../data/north');

suite('North Tests',function(){
	
	var north;
	
	lab.beforeEach(function(done){
		north = new North();
		done();
	});

	test('Returned string is North',function(done){		
		expect(north.toString()).to.equal('North');
		done();
	});

	test('Return West when turning left', function(done){
		expect(north.turnLeft()).to.equal('W');
		done();
	});

	test('Return East when turning right', function(done){
		expect(north.turnRight()).to.equal('E');
		done();
	});

});