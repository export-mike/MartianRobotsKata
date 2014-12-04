var _ = require('lodash');

function LostRobotsService() {
	var self = this;
	this.lostPositions = [];

	this.positionIsLost = function(position) {
		var found = _.find(self.lostPositions, function(lostPosition) {
			return lostPosition.x === position.x && lostPosition.y === position.y;
		});

		if (found) {
			return true;
		} else {
			return false;
		}
	};

	this.addLostPosition = function(position) {
		self.lostPositions.push({
			x: position.x,
			y: position.y
		});
	};
}

module.exports = LostRobotsService;