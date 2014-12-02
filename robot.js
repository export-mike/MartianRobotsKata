module.exports = function Robot(options) {
	var self = this;
	this.map = options.map;
	this.startDirection = options.startDirection;

	this.currentPosition = {
		x: 1,
		y: 1,
		facing: options.startDirection.facing
	};

	this.currentDirection = this.startDirection;

	this.moveForward = function(){

		var startX = self.currentPosition.x;
		var startY = self.currentPosition.y;
		
		self.currentPosition = self.currentDirection.moveForward(startX, startY);

		return self.currentPosition;
	};
};