var DirectionCharacters = require('./direction-characters');

function BaseDirection(){
	this.NORTH_CHAR = DirectionCharacters.NORTH_CHAR;
	this.EAST_CHAR = DirectionCharacters.EAST_CHAR;
	this.SOUTH_CHAR = DirectionCharacters.SOUTH_CHAR;
	this.WEST_CHAR = DirectionCharacters.WEST_CHAR;
}

BaseDirection.prototype.move = function(startX, startY, moveFunction, facingChar) {
	var newPosition = moveFunction(startX, startY);

	newPosition.facing = facingChar;

	return newPosition;
};


module.exports = BaseDirection;