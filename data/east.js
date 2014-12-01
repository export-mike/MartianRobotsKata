function East(Map){

	this.moveForward = function(startX, startY){
		
		return Map.moveXForward(startX,startY);

	};	

	this.moveBackward = function(startX, startY){
		
		return Map.moveXBackward(startX,startY);

	};

	return this;
}

East.prototype.turnLeft = function(){
	return 'N';
};

East.prototype.turnRight = function(){
	return 'S';
};

East.prototype.facing = 'E';

East.prototype.toString = function(){
	return 'East';
};


module.exports = East;