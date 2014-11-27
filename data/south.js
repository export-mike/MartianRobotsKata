function South(East,West){
	this.East = East;
	this.West = West;
}

South.prototype.turnLeft = function(){
	return new this.East();
};

South.prototype.turnRight = function(){
	return new this.West();
};

South.prototype.toString = function(){
	return 'South';
};

module.exports = South;