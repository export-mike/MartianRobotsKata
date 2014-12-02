var Base = require('./base-direction');

function South(Map) {
	var self = this;
	var south = {};

	south = Object.create(new Base());

	south.moveForward = function(startX, startY) {

		return south.move(startX, startY, Map.moveYBackward, south.SOUTH_CHAR);

	};

	south.moveBackward = function(startX, startY) {
		
		return south.move(startX, startY, Map.moveYForward, south.SOUTH_CHAR);
	};

	south.turnLeft = function() {
		return south.EAST_CHAR;
	};

	south.turnRight = function() {
		return south.WEST_CHAR;
	};

	south.facing = south.SOUTH_CHAR;

	south.toString = function() {
		return 'South';
	};

	return south;
}

module.exports = South;