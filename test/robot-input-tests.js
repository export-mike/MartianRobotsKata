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

var inputFile1 = require('fs').readFileSync(path.join(__dirname,'../input/input1.txt'), "utf8");
var expectedFile1 = require('fs').readFileSync(path.join(__dirname,'../expected/expected1.txt'), "utf8");

suite('Robot Criteria', function() {

	test('Run Input File1 string provided', function(done) {
		
		var robotInputProcessor = new RobotsInputProcessor();

		var output = robotInputProcessor.processInput(inputFile1);

		expect(output).to.be.equal(expectedFile1);
	});

});

