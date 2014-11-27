function East(South, North){
	this.South = South;
	this.North = North;
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