var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var South = require('../data/south');
var Map = require('../data/map');

suite('South Tests', function() {

	var south;

	lab.beforeEach(function(done) {
		south = new South();
		done();
	});

	test('Returned string is South', function(done) {
		expect(south.toString()).to.equal('South');
		done();
	});

	test('Return East when turning left', function(done) {
		expect(south.turnLeft()).to.equal('E');
		done();
	});

	test('Return East when turning right', function(done) {
		expect(south.turnRight()).to.equal('W');
		done();
	});

	test('Move Forward: New Location is x:1, y:1', function(done) {
		var endPosition = south.moveForward(1, 2);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(2);
		done();
	});

	test('Move Backward: New Location is x:1, y:2', function(done) {
		var endPosition = south.moveBackward(1, 1);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(2);
		done();
	});

});