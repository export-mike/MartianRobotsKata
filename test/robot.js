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


suite('Robot',function(){

	test('Default Location to X:1 Y: 1 Direction: E', function(done){		
		var map = Map.setSize(5,3);
		var east = new East(map);

		var robot = new Robot({map:map, startDirection:east});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('E');
		done();
	});

	
});