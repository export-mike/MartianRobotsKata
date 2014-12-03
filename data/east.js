var Base = require('./base-direction');

function East(Map) {
	var east = {};

	east = Object.create(new Base());

	east.moveForward = function(startX, startY) {

		return east.move(startX, startY, Map.moveXForward, east.EAST_CHAR);

	};

	east.moveBackward = function(startX, startY) {
		
		return east.move(startX, startY, Map.moveXBackward, east.EAST_CHAR);
	};

	east.turnLeft = function() {
		return east.NORTH_CHAR;
	};

	east.turnRight = function() {
		return east.SOUTH_CHAR;
	};

	east.facing = east.EAST_CHAR;

	east.toString = function() {
		return 'East';
	};

	return east;
}

module.exports = East;