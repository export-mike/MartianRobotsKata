var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var North = require('../data/north');
var Map = require('../data/map');

suite('North Tests', function() {

	var north;

	lab.beforeEach(function(done) {
		Map.setSize(5,3);
		north = new North(Map);
		done();
	});

	test('Returned string is North', function(done) {
		expect(north.toString()).to.equal('North');
		done();
	});

	test('Return West when turning left', function(done) {
		expect(north.turnLeft()).to.equal('W');
		done();
	});

	test('Return East when turning right', function(done) {
		expect(north.turnRight()).to.equal('E');
		done();
	});

	test('Move Forward: New Location is x:1, y:2', function(done) {
		var endPosition = north.moveForward(1, 1);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(2);
		done();
	});

	test('Move Backward: New Location is x:1, y:1', function(done) {
		var endPosition = north.moveBackward(1, 2);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(1);
		done();
	});
});