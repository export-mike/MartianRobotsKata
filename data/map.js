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
	return {
		x : startX,
		y : startY+1
	};
};

module.exports.moveYBackward = function(startX, startY){
	return resultAfterMoving(startX,startY-1);
};

function resultAfterMoving (newX, newY){
	return {
		x : newX,
		y: newY,
		isLost: xIsOffGrid(newX) || yIsOffGrid(newY)
	};
}

function xIsOffGrid (xValue){
	return xValue < (map.size.width -1);
}

function yIsOffGrid (yValue){
	return yValue < (map.size.height -1);
}