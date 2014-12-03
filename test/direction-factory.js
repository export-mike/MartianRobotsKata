var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var DirectionFactory = require('../factories/direction-factory');
var DirectionCharacters = require('../data/direction-characters');

suite('Direction Factory Tests', function() {
	test('Returned direction type is North', function(done) {
		expect(new DirectionFactory.get('N')().facing).to.equal(DirectionCharacters.NORTH_CHAR);
		done();
	});

	test('Returned direction type is South', function(done) {
		expect(new DirectionFactory.get('S')().facing).to.equal(DirectionCharacters.SOUTH_CHAR);
		done();
	});

	test('Returned direction type is East', function(done) {
		expect(new DirectionFactory.get('E')().facing).to.equal(DirectionCharacters.EAST_CHAR);
		done();
	});

	test('Returned direction type is West', function(done) {
		expect(new DirectionFactory.get('W')().facing).to.equal(DirectionCharacters.WEST_CHAR);
		done();
	});

	test('Returned direction type is NULL', function(done) {
		expect(new DirectionFactory.get('')().facing).to.equal('NULL');
		done();
	});
});