var Base = require('./base-direction');

function West(Map) {
	var west = {};

	west = Object.create(new Base());

	west.moveForward = function(startX, startY) {

		return west.move(startX, startY, Map.moveXBackward, west.WEST_CHAR);

	};

	west.moveBackward = function(startX, startY) {
		
		return west.move(startX, startY, Map.moveXForward, west.WEST_CHAR);
	};

	west.turnLeft = function() {
		return west.SOUTH_CHAR;
	};

	west.turnRight = function() {
		return west.NORTH_CHAR;
	};

	west.facing = west.WEST_CHAR;

	west.toString = function() {
		return 'West';
	};

	return west;
}

module.exports = West;