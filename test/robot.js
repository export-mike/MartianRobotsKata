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


suite('Robot', function() {

	test('Default Location is set to X:1 Y: 1 set Direction to: E', function(done) {
		var map = Map.setSize(5, 3);
		var east = new East(map);

		var robot = new Robot({
			map: map,
			startDirection: east
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('E');
		done();
	});

	test('Default Location is set to X:50 Y: 50 set Direction to: N', function(done) {
		var map = Map.setSize(50, 50);
		var north = new North(map);

		var robot = new Robot({
			map: map,
			startDirection: north
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('N');
		done();
	});

	test('Default Location is set to X:50 Y: 50 set Direction to: S', function(done) {
		var map = Map.setSize(50, 50);
		var south = new South(map);

		var robot = new Robot({
			map: map,
			startDirection: south
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('S');
		done();
	});

	test('Default Location is set to X:50 Y: 50 set Direction to: W', function(done) {
		var map = Map.setSize(50, 50);
		var west = new West(map);

		var robot = new Robot({
			map: map,
			startDirection: west
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('W');
		done();
	});


});