var DirectionFactory = require('./factories/direction-factory');

var _ = require('lodash');

module.exports = function Robot(options) {
	var self = this;
	this.map = options.map;
	this.startDirection = options.startDirection;
	self.robotPath = [];

	this.startPosition = options.startPosition || {
		x: 1,
		y: 1
	};

	this.currentPosition = _.extend(this.startPosition, {
		facing: options.startDirection.facing,
	});

	pushNewPositionToPath();

	this.currentDirection = this.startDirection;

	this.moveForward = function() {
		return moveAndSetPosition(self.currentDirection.moveForward);
	};

	this.moveBackward = function() {
		return moveAndSetPosition(self.currentDirection.moveBackward);
	};

	function moveAndSetPosition(moveFunction) {
		var startX = self.currentPosition.x;
		var startY = self.currentPosition.y;

		self.currentPosition = moveFunction(startX, startY);
		self.currentPosition.direction = self.currentDirection;
		self.currentPosition.facing = self.currentDirection.facing;

		pushNewPositionToPath();

		return self.currentPosition;
	}

	function pushNewPositionToPath() {
		self.robotPath.push({
			x: self.currentPosition.x,
			y: self.currentPosition.y,
			facing: self.currentPosition.facing
		});
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

		pushNewPositionToPath();
	}

	this.processCommands = function(commands) {
		if (commands) {
			var commandsToProcess = commands.split('');

			commandsToProcess.forEach(function(command) {

				if (commandIsTurn(command)) {
					turn(command);
				} else if (commandIsMove(command)) {
					move(command);
				}

			});
		}

		console.log(self.robotPath);
		return self.currentPosition.x + ' ' + self.currentPosition.y + ' ' + self.currentPosition.facing + outputIsLost();
	};

	function outputIsLost() {
		if (self.currentPosition.isLost) {
			return ' LOST';
		} else {
			return '';
		}
	}

	function commandIsTurn(command) {
		return command === 'L' || command === 'R';
	}

	function turn(command) {
		if (command === 'L') {
			self.turnLeft();
		} else if (command === 'R') {
			self.turnRight();
		}
	}

	function commandIsMove(command) {
		if (command === 'F') {
			self.moveForward();
		} else if (command === 'B') {
			self.moveBackward();
		}
	}

};