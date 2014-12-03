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


suite('Robot Move East', function() {

	test('Move forward - new location 2,1 E', function(done) {
		Map.setSize(50, 50);
		var east = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: east
		});

		var newPosition = robot.moveForward();

		expect(newPosition.x).to.equal(2);
		expect(newPosition.y).to.equal(1);
		expect(newPosition.facing).to.equal('E');
		done();
	});

	test('Move forward 2 steps - new location 3,1 E', function(done) {
		Map.setSize(50, 50);
		var east = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: east
		});

		robot.moveForward();
		var newPosition = robot.moveForward();

		expect(newPosition.x).to.equal(3);
		expect(newPosition.y).to.equal(1);
		expect(newPosition.facing).to.equal('E');
		done();
	});

	test('Move forward 12 steps - new location 1,13 E', function(done) {
		Map.setSize(50, 50);
		var east = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: east
		});

		var i;

		for (i = 0; i < 12; i++) {
			robot.moveForward();
		}

		expect(robot.currentPosition.x).to.equal(13);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('E');
		done();
	});


	test('Move backward - new location 2,1 E', function(done) {
		Map.setSize(50, 50);
		var east = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: east,
			startPosition: {
				x:3,
				y:1
			}
		});

		var newPosition = robot.moveBackward();

		expect(newPosition.x).to.equal(2);
		expect(newPosition.y).to.equal(1);
		expect(newPosition.facing).to.equal('E');
		done();
	});


	test('Move backward 12 steps - new location 1, 1 E', function(done) {
		Map.setSize(50, 50);
		var east = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: east,
			startPosition:{
				x:13,
				y:1
			}
		});

		var i;

		for (i = 0; i < 12; i++) {
			robot.moveBackward();
		}

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('E');
		done();
	});


});