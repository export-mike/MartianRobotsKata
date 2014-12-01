var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var experiment = lab.experiment;
var expect = Code.expect;

var East = require('../data/east');

var Map = require('../data/map');

suite('East',function(){
	
	var east;
	
	lab.beforeEach(function(done){
		var map = Map.setSize(5,3);
		east = new East(map);

		done();
	});

	test('Returned string is east',function(done){		
		expect(east.toString()).to.equal('East');
		done();
	});

	test('Return North when turning left', function(done){
		expect(east.turnLeft()).to.equal('N');
		done();
	});

	test('Return South when turning right', function(done){
		expect(east.turnRight()).to.equal('S');
		done();
	});

	test('Move Forward: New Location is x:2, y:1', function(done){
		var endPosition = east.moveForward(1,1);
		expect(endPosition.x).to.equal(2);
		expect(endPosition.y).to.equal(1);
		done();
	});	

	test('Move Backward: New Location is x:1, y:1', function(done){
		var endPosition = east.moveBackward(2,1);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(1);
		done();
	});



});
