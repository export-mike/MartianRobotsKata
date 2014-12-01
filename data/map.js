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