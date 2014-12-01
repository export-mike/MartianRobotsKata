var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var West = require('../data/west');
var Map = require('../data/map');

suite('West', function() {

	var west;

	lab.beforeEach(function(done) {
		west = new West(Map);
		done();
	});

	test('Returned string is west', function(done) {
		expect(west.toString()).to.equal('West');
		done();
	});

	test('Return South when turning left', function(done) {
		expect(west.turnLeft()).to.equal('S');
		done();
	});

	test('Return North when turning right', function(done) {
		expect(west.turnRight()).to.equal('N');
		done();
	});

	test('Move Forward: New Location is x:1, y:1', function(done) {
		var endPosition = west.moveForward(2, 1);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(1);
		done();
	});

	test('Move Backward: New Location is x:2, y:1', function(done) {
		var endPosition = west.moveBackward(1, 1);
		expect(endPosition.x).to.equal(2);
		expect(endPosition.y).to.equal(1);
		done();
	});
});