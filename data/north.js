const NORTH_CHAR = 'N';

function North(Map) {

	this.moveForward = function(startX, startY) {

		var newPosition = Map.moveYForward(startX, startY);
		
		newPosition.facing = NORTH_CHAR;

		return newPosition;
	};

	this.moveBackward = function(startX, startY) {

		return Map.moveYBackward(startX, startY);

	};
}

North.prototype.turnLeft = function() {
	return 'W';
};

North.prototype.turnRight = function() {
	return 'E';
};

North.prototype.facing = NORTH_CHAR;

North.prototype.toString = function() {
	return 'North';
};

module.exports = North;