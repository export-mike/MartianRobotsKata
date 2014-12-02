const NORTH_CHAR = 'N';


function BaseDirection(){
	this.NORTH_CHAR = NORTH_CHAR;
}

BaseDirection.prototype.move = function(startX, startY, moveFunction, facingChar) {
	var newPosition = moveFunction(startX, startY);

	newPosition.facing = facingChar;

	return newPosition;
};


module.exports = BaseDirection;