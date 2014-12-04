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

var RobotsInputProcessor = require('../robots-input-processor');

var path = require('path');

var inputFile1 = require('fs').readFileSync(path.join(__dirname, '../input/input1.txt'), "utf8");
var expectedFile1 = require('fs').readFileSync(path.join(__dirname, '../expected/expected1.txt'), "utf8");

suite('Robot Criteria', function() {

	test('Run Input File1 string provided', function(done) {

		var robotInputProcessor = new RobotsInputProcessor();

		var output = robotInputProcessor.processInput(inputFile1);

		expect(output).to.be.equal(expectedFile1);
	});

	test('Run robot command processor line test 1', function(done) {
		Map.setSize(5, 3);

		var east = new East(Map);
		var robot = new Robot({
			map: Map,
			startPosition: {
				x: 1,
				y: 1
			},
			startDirection: east
		});

		expect(robot.processCommands('RFRFRFRF')).to.equal('1 1 E');
		done();
	});

	test('Run robot command processor line test 2', function(done) {
		Map.setSize(5, 3);

		var north = new North(Map);
		var robot = new Robot({
			map: Map,
			startPosition: {
				x: 3,
				y: 2
			},
			startDirection: north
		});
		
		expect(robot.processCommands('FRRFLLFFRRFLL')).to.equal('3 3 N LOST');
		done();
	});

	test('Run robot command processor line test 3', function(done) {
		Map.setSize(5, 3);

		var west = new West(Map);
		var robot = new Robot({
			map: Map,
			startPosition: {
				x: 0,
				y: 3
			},
			startDirection: west
		});

		expect(robot.processCommands('LLFFFLFLFL')).to.equal('2 3 S');
		done();
	});

});