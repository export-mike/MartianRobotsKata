function West(){
}

West.prototype.turnLeft = function(){
	return 'S';
};

West.prototype.turnRight = function(){
	return 'N';
};

West.prototype.toString = function(){
	return 'West';
};

module.exports = West;