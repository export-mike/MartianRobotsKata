
function East(South, North, map){
	this.South = South;
	this.North = North;

	this.moveForward = function(startX, startY){
		
		return {
			x:1,
			y:2
		};

	};

	return this;
}

East.prototype.turnLeft = function(){
	return new this.South();
};

East.prototype.turnRight = function(){
	return new this.North();
};

East.prototype.toString = function(){
	return 'East';
};


module.exports = East;