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


suite('Robot Move South', function() {

	test('Move forward - new location 1,2 N', function(done) {
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south,
			startPosition:{
				x : 1,
				y : 3
			}
		});

		var newPosition = robot.moveForward();

		expect(newPosition.x).to.equal(1);
		expect(newPosition.y).to.equal(2);
		expect(newPosition.facing).to.equal('N');
		done();
	});

	test('Move forward 2 steps - new location 1,3 N', function(done) {
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south,
			startPosition:{
				x : 1,
				y : 5
			}
		});

		robot.moveForward();
		var newPosition = robot.moveForward();

		expect(newPosition.x).to.equal(1);
		expect(newPosition.y).to.equal(3);
		expect(newPosition.facing).to.equal('N');
		done();
	});

	test('Move forward 12 steps - new location 1,13 N', function(done) {
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south,
			startPosition: {
				x : 1,
				y : 25
			}
		});

		var i;

		for (i = 0; i < 12; i++) {
			robot.moveForward();
		}

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(13);
		expect(robot.currentPosition.facing).to.equal('N');
		done();
	});


	test('Move backward - new location 1,2 N', function(done) {
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south,
			startPosition: {
				x:1,
				y:3
			}
		});

		var newPosition = robot.moveBackward();

		expect(newPosition.x).to.equal(1);
		expect(newPosition.y).to.equal(2);
		expect(newPosition.facing).to.equal('N');
		done();
	});

	test('Move backward 12 steps - new location 1,1 N', function(done) {
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south,
			startPosition:{
				x:1,
				y:1
			}
		});

		var i;

		for (i = 0; i < 12; i++) {
			robot.moveBackward();
		}

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(13);
		expect(robot.currentPosition.facing).to.equal('N');
		done();
	});


});