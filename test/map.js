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
});