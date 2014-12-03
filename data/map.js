var map = {
	size: {
		width: 0,
		height: 0
	}
};

module.exports.setSize = function(x, y) {
	map.size.width = x;
	map.size.height = y;

	return map;
};

module.exports.moveXForward = function(startX, startY) {
	return resultAfterMoving(
		startX + 1,
		startY
	);
};

module.exports.moveXBackward = function(startX, startY) {
	return resultAfterMoving(
		startX - 1,
		startY
	);
};

module.exports.moveYForward = function(startX, startY) {
	return resultAfterMoving(
		startX,
		startY + 1
	);
};

module.exports.moveYBackward = function(startX, startY) {
	return resultAfterMoving(
		startX,
		startY - 1
	);
};

function resultAfterMoving (newX, newY) {
	return {
		x: newX,
		y: newY,
		isLost: xIsOffGrid(newX) || yIsOffGrid(newY)
	};
}

function xIsOffGrid(xValue) {
	var zeroBasedWidth = map.size.width - 1;

	return isOffGrid(xValue, zeroBasedWidth);
}

function yIsOffGrid(yValue) {
	var zeroBasedHeight = map.size.height - 1;

	return isOffGrid(yValue, zeroBasedHeight);
}

function isOffGrid(value, size) {
	if (value < 0 || value > size) {
		return true;
	} else {
		return false;
	}
}