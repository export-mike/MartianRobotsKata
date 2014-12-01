function East(map){

	this.moveForward = function(startX, startY){
		
		return {
			x:startX+1,
			y:startY
		};

	};	

	this.moveBackward = function(startX, startY){
		
		return {
			x:startX-1,
			y:startY
		};

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