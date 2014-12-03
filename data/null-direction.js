var Base = require('./base-direction');

function NullDirection(Map) {
	var self = this;
	var nullDirection = {};

	nullDirection = Object.create(new Base());

	nullDirection.moveForward = function(startX, startY) {
		return nullDirection.move(startX, startY, nullDirection.moveNowhere, 'NULL');
	};

	nullDirection.moveNowhere = function(startX, startY){
		return {x:startX, y:startY};
	};

	nullDirection.moveBackward = function(startX, startY) {
		
		return nullDirection.move(startX, startY, nullDirection.moveNowhere, 'NULL');
	};

	nullDirection.turnLeft = function() {
		return '';
	};

	nullDirection.turnRight = function() {
		return '';
	};

	nullDirection.facing = nullDirection.NORTH_CHAR;

	nullDirection.toString = function() {
		return 'NULL DIRECTION';
	};

	return nullDirection;
}

module.exports = NullDirection;