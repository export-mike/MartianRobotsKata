var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var North = require('../data/north.js');

suite('North Tests',function(){
	test('returned string is North',function(done){

		var north = new North({});
		
		expect(north.toString()).to.equal('North');
		done();
	});
});