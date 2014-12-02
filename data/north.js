function North(Map) {

	this.moveForward = function(startX, startY) {

		return Map.moveYForward(startX, startY);

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

North.prototype.facing = 'N';

North.prototype.toString = function() {
	return 'North';
};

module.exports = North;