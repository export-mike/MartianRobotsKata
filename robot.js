var _ = require('lodash');

module.exports = function Robot(options) {
	var self = this;
	this.map = options.map;
	this.startDirection = options.startDirection;

	this.startPosition = options.startPosition || {
		x: 1,
		y: 1
	};

	this.currentPosition = _.extend(this.startPosition, {
		facing: options.startDirection.facing,
	});

	this.currentDirection = this.startDirection;

	this.moveForward = function() {
		return move(self.currentDirection.moveForward);
	};

	this.moveBackward = function() {
		return move(self.currentDirection.moveBackward);
	};

	function move(moveFunction) {
		var startX = self.currentPosition.x;
		var startY = self.currentPosition.y;

		self.currentPosition = moveFunction(startX, startY);

		return self.currentPosition;
	}

};