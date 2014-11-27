var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var East = require('../data/east');
var North = require('../data/north');
var South = require('../data/south');

suite('East',function(){
	
	var east;
	
	lab.beforeEach(function(done){
		east = new East(North, South);
		done();
	});

	test('Returned string is east',function(done){		
		expect(east.toString()).to.equal('East');
		done();
	});

	test('Return North when turning left', function(done){
		expect(east.turnLeft().toString()).to.equal('North');
		done();
	});

	test('Return South when turning right', function(done){
		expect(east.turnRight().toString()).to.equal('South');
		done();
	});

});