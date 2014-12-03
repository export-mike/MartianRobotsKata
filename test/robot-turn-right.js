var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var Robot = require('../robot');
var Map = require('../data/map');
var East = require('../data/east');
var North = require('../data/north');
var South = require('../data/south');
var West = require('../data/west');


suite('Robot Turn Right', function() {

	test('Turn right once and face East', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north
		});

		robot.turnRight();

		expect(robot.currentPosition.facing).to.equal('E');
		expect(robot.currentPosition.direction.toString()).to.equal('East');
		done();
	});

	test('Turn right twice and face South', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north
		});

		robot.turnRight();
		robot.turnRight();

		expect(robot.currentPosition.facing).to.equal('S');
		expect(robot.currentPosition.direction.toString()).to.equal('South');
		done();
	});
});