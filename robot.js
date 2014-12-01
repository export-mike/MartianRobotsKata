module.exports = function Robot(options){

	this.map = options.map;
	this.startDirection = options.startDirection;
	
	if(!options.startPosition){
		this.currentPosition = {
			x: 1,
			y: 1,
			direction: options.startDirection.facing
		};
	}

	return this;
};