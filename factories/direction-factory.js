var East = require('../data/east');
var North = require('../data/north');
var South = require('../data/south');
var West = require('../data/west');
var NullDirection = require('../data/null-direction');
var DirectionCharacters = require('../data/direction-characters');

module.exports.get = function(directionChar){
	switch(directionChar){
		case DirectionCharacters.NORTH_CHAR: 
			return North;
		case DirectionCharacters.EAST_CHAR:
			return East;
		case DirectionCharacters.SOUTH_CHAR:
			return South;
		case DirectionCharacters.WEST_CHAR:
			return West;
		default:
			return NullDirection;
	}
};