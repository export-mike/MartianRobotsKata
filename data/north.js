var West = require('./west');
var East = require('./east');

function North(){}

North.prototype.turnLeft = function(){
	return new West();
};

North.prototype.turnRight = function(){
	return new East();
};

North.prototype.toString = function(){
	return 'North';
};

module.exports = North;