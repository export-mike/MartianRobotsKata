function South(West, East){
	this.West = West;
	this.East = East;
}

South.prototype.turnLeft = function(){
	return new this.West();
};

South.prototype.turnRight = function(){
	return new this.East();
};

South.prototype.toString = function(){
	return 'South';
};

module.exports = South;