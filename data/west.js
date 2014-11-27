function West(North, South){
	this.North = North;
	this.South = South;
}

West.prototype.turnLeft = function(){
	return new this.North();
};

West.prototype.turnRight = function(){
	return new this.South();
};

West.prototype.toString = function(){
	return 'West';
};

module.exports = West;