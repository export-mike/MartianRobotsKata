var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var Map = require('../data/map');

suite('Map',function(){

	test('Width is 20 and height is 30',function(done){		
		var map = Map.setSize(20, 30);
		expect(map.size.width).to.equal(20);
		expect(map.size.height).to.equal(30);
		done();
	});

	test('Width is 0 and height is 30',function(done){		
		var map = Map.setSize(0, 30);
		expect(map.size.width).to.equal(0);
		expect(map.size.height).to.equal(30);
		done();
	});

	test('Position is off map x: -1 and y:1',function(done){
		Map.setSize(5,3);
		var newPosition = Map.moveXBackward(0,0);
		expect(newPosition.x).to.equal(-1);
		expect(newPosition.isLost).to.equal(true);
		done();
	});	

	test('Position is off map x: -1 and y:1',function(done){
		Map.setSize(5,3);
		var newPosition = Map.moveXBackward(0,1);
		expect(newPosition.x).to.equal(-1);
		expect(newPosition.isLost).to.equal(true);
		done();
	});

	test('Position is on map (boundary) x: 5 and y:0',function(done){
		Map.setSize(5,3);
		var newPosition = Map.moveXForward(4,0);
		expect(newPosition.x).to.equal(5);
		expect(newPosition.isLost).to.equal(false);
		done();
	});

	test('Position is on map (boundary) x: 0 and y:3',function(done){
		Map.setSize(5,3);
		var newPosition = Map.moveYForward(0,2);
		expect(newPosition.y).to.equal(3);
		expect(newPosition.isLost).to.equal(false);
		done();
	});
});