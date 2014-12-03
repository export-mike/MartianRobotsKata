var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();
 
var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;
 
var NullDirection = require('../data/null-direction');
var Map = require('../data/map');
 
suite('NullDirection Tests', function() {
 
	var nullDirection;
 
	lab.beforeEach(function(done) {
		Map.setSize(5,3);
		nullDirection = new NullDirection(Map);
		done();
	});
 
	test('Returned string is NullDirection', function(done) {
		expect(nullDirection.toString()).to.equal('NULL DIRECTION');
		done();
	});
 
	test('Return West when turning left', function(done) {
		expect(nullDirection.turnLeft()).to.equal('NULL');
		done();
	});
 
	test('Return East when turning right', function(done) {
		expect(nullDirection.turnRight()).to.equal('NULL');
		done();
	});
 
	test('Move Forward: New Location is x:1, y:2', function(done) {
		var endPosition = nullDirection.moveForward(1, 1);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(1);
		done();
	});
 
	test('Move Backward: New Location is x:1, y:1', function(done) {
		var endPosition = nullDirection.moveBackward(1, 2);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(2);
		done();
	});
});