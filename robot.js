module.exports = function Robot(options) {

	this.map = options.map;
	this.startDirection = options.startDirection;

	this.currentPosition = {
		x: 1,
		y: 1,
		facing: options.startDirection.facing
	};


	return this;
};