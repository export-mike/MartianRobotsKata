function West(South, North){
	this.South = South;
	this.North = North;
}

West.prototype.turnLeft = function(){
	return new this.South();
};

West.prototype.turnRight = function(){
	return new this.North();
};

West.prototype.toString = function(){
	return 'West';
};

module.exports = West;