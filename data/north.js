function North(){

}

North.prototype.turnLeft = function(){
	return 'W';
};

North.prototype.turnRight = function(){
	return 'E';
};

North.prototype.toString = function(){
	return 'North';
};

module.exports = North;