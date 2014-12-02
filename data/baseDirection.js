const NORTH_CHAR = 'N';
const EAST_CHAR = 'E';
const SOUTH_CHAR = 'S';
const WEST_CHAR = 'W';

function BaseDirection(){
	this.NORTH_CHAR = NORTH_CHAR;
	this.EAST_CHAR = EAST_CHAR;
	this.SOUTH_CHAR = SOUTH_CHAR;
	this.WEST_CHAR = WEST_CHAR;
}

BaseDirection.prototype.move = function(startX, startY, moveFunction, facingChar) {
	var newPosition = moveFunction(startX, startY);

	newPosition.facing = facingChar;

	return newPosition;
};


module.exports = BaseDirection;