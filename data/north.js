var Base = require('./baseDirection');

function North(Map) {
	var self = this;
	var north = {};

	north = Object.create(new Base());

	north.moveForward = function(startX, startY) {

		return north.move(startX, startY, Map.moveYForward, north.NORTH_CHAR);

	};

	north.moveBackward = function(startX, startY) {
		var newPosition = Map.moveYBackward(startX, startY);

		newPosition.facing = north.NORTH_CHAR;

		return newPosition;

	};

	north.turnLeft = function() {
		return 'W';
	};

	north.turnRight = function() {
		return 'E';
	};

	north.facing = north.NORTH_CHAR;

	north.toString = function() {
		return 'North';
	};

	return north;
}

module.exports = North;