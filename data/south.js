function South(){
}

South.prototype.turnLeft = function(){
	return 'E';
};

South.prototype.turnRight = function(){
	return 'W';
};

South.prototype.toString = function(){
	return 'South';
};

module.exports = South;