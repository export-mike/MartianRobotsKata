// function East(Map){

// 	this.moveForward = function(startX, startY){
		
// 		return Map.moveXForward(startX,startY);

// 	};	

// 	this.moveBackward = function(startX, startY){
		
// 		return Map.moveXBackward(startX,startY);

// 	};
// }

// East.prototype.turnLeft = function(){
// 	return 'N';
// };

// East.prototype.turnRight = function(){
// 	return 'S';
// };

// East.prototype.facing = 'E';

// East.prototype.toString = function(){
// 	return 'East';
// };

// module.exports = East;

var Base = require('./base-direction');

function East(Map) {
	var self = this;
	var east = {};

	east = Object.create(new Base());

	east.moveForward = function(startX, startY) {

		return east.move(startX, startY, Map.moveXForward, east.EAST_CHAR);

	};

	east.moveBackward = function(startX, startY) {
		
		return east.move(startX, startY, Map.moveXBackward, east.EAST_CHAR);
	};

	east.turnLeft = function() {
		return east.NORTH_CHAR;
	};

	east.turnRight = function() {
		return east.SOUTH_CHAR;
	};

	east.facing = east.EAST_CHAR;

	east.toString = function() {
		return 'East';
	};

	return east;
}

module.exports = East;