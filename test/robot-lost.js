var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var Robot = require('../robot');
var East = require('../data/east');
var North = require('../data/north');
var South = require('../data/south');
var West = require('../data/west');


suite('Robot Get Lost', function() {

	test('Go backward one step and fall off planet', function(done) {
		var Map = require('../data/map');
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north,
			startPosition: {
				x: 1,
				y: 0
			}
		});

		robot.moveBackward();
		expect(robot.currentPosition.isLost).to.equal(true);
		expect(robot.currentPosition.direction.toString()).to.equal('North');
		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(-1);
		done();
	});

	test('Go forward one step and fall off planet', function(done) {
		var Map = require('../data/map');
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south,
			startPosition: {
				x: 1,
				y: 0
			}
		});

		robot.moveForward();
		expect(robot.currentPosition.isLost).to.equal(true);
		expect(robot.currentPosition.direction.toString()).to.equal('South');
		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(-1);
		done();
	});

	test('Go left one step and fall off planet', function(done) {
		var Map = require('../data/map');
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x: 0,
				y: 0
			}
		});

		robot.moveForward();
		expect(robot.currentPosition.isLost).to.equal(true);
		expect(robot.currentPosition.direction.toString()).to.equal('West');
		expect(robot.currentPosition.x).to.equal(-1);
		expect(robot.currentPosition.y).to.equal(0);
		done();
	});

	test('Go right one step and fall off planet', function(done) {
		var Map = require('../data/map');
		Map.setSize(50, 50);
		var west = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x: 49,
				y: 0
			}
		});

		robot.moveForward();
		expect(robot.currentPosition.isLost).to.equal(true);
		expect(robot.currentPosition.direction.toString()).to.equal('East');
		expect(robot.currentPosition.x).to.equal(50);
		expect(robot.currentPosition.y).to.equal(0);
		done();
	});
});