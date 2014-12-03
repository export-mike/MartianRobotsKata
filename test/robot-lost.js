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


suite('Robot Get Lost', function() {

	test('Go backward one step and fall off planet', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north,
			startPosition:{
				x:1,
				y:0
			}
		});

		robot.moveBackward();

		expect(robot.currentPosition.isLost).to.equal(true);
		expect(robot.currentPosition.direction.toString()).to.equal('East');
		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(-1);
		done();
	});
});