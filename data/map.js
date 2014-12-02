var map = {
	size: {
		width:0,
		height:0
	}
};

module.exports.setSize = function(x, y){
	map.size.width = x;
	map.size.height = y;

	return map;
};

module.exports.moveXForward = function(startX, startY){
	return {
		x : startX+1,
		y : startY
	};
};

module.exports.moveXBackward = function(startX, startY){
	return {
		x : startX-1,
		y : startY
	};
};

module.exports.moveYForward = function(startX, startY){
	// console.log('HERE');
	return {
		x : startX,
		y : startY+1
	};
};

module.exports.moveYBackward = function(startX, startY){
	return {
		x : startX,
		y : startY-1
	};
};