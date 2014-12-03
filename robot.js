var DirectionFactory = require('./factories/direction-factory');

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
		self.currentPosition.direction = self.currentDirection;
		self.currentPosition.facing = self.currentDirection.facing;
		
		return self.currentPosition;
	}

	this.turnLeft = function() {
		var directionChar = self.currentDirection.turnLeft();
		updateCurrentPositionAfterTurning(directionChar);
	};

	this.turnRight = function() {
		var directionChar = self.currentDirection.turnRight();
		updateCurrentPositionAfterTurning(directionChar);
	};

	function updateCurrentPositionAfterTurning(directionChar) {
		var DirectionType = DirectionFactory.get(directionChar);

		self.currentPosition.facing = directionChar;
		self.currentDirection = new DirectionType(self.map);
		self.currentPosition.direction = self.currentDirection;
	}

	

};