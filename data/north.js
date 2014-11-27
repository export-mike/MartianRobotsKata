function North(West, East){
	this.West = West;
	this.East = East;
}

North.prototype.turnLeft = function(){
	return new this.West();
};

North.prototype.turnRight = function(){
	return new this.East();
};

North.prototype.toString = function(){
	return 'North';
};

module.exports = North;