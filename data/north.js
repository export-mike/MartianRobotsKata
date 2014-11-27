// var East = require('./East');
// var West = require('./West');

function North(map){
	this.map = map;
}

// North.prototype.turnLeft = function(){
// 	return new West(map);
// };

// North.prototype.turnRight = function(){
// 	return new East(map);
// };

North.prototype.toString = function(){
	return 'North';
};

module.exports = North;