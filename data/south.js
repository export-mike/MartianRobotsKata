function South(Map) {

	this.moveForward = function(startX, startY) {

		return Map.moveYBackward(startX, startY);

	};

	this.moveBackward = function(startX, startY) {

		return Map.moveYForward(startX, startY);

	};
}

South.prototype.turnLeft = function(){
	return 'E';
};

South.prototype.turnRight = function() {
	return 'W';
};

South.prototype.facing = 'S';

South.prototype.toString = function() {
	return 'South';
};

module.exports = South;