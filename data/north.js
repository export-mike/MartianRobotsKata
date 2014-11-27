var West = require('./west');

function North(){}

North.prototype.turnLeft = function(){
	return new West();
};

North.prototype.toString = function(){
	return 'North';
};

module.exports = North;