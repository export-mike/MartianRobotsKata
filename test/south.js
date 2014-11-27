var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var South = require('../data/south');
var East = require('../data/east');
var West = require('../data/west');

suite('South Tests',function(){
	
	var south;
	
	lab.beforeEach(function(done){
		south = new South(East, West);
		done();
	});

	test('Returned string is South',function(done){		
		expect(south.toString()).to.equal('South');
		done();
	});

	test('Return East when turning left', function(done){
		expect(south.turnLeft().toString()).to.equal('East');
		done();
	});

	test('Return East when turning right', function(done){
		expect(south.turnRight().toString()).to.equal('West');
		done();
	});

});