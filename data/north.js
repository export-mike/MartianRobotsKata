var Base = require('./baseDirection');

function North(Map) {
	var self = this;
	var north = {};

	north = Object.create(new Base());

	north.moveForward = function(startX, startY) {

		return north.move(startX, startY, Map.moveYForward, north.NORTH_CHAR);

	};

	north.moveBackward = function(startX, startY) {
		
		return north.move(startX, startY, Map.moveYBackward, north.NORTH_CHAR);
	};

	north.turnLeft = function() {
		return north.WEST_CHAR;
	};

	north.turnRight = function() {
		return north.EAST_CHAR;
	};

	north.facing = north.NORTH_CHAR;

	north.toString = function() {
		return 'North';
	};

	return north;
}

module.exports = North;