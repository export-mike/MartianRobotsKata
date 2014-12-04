var Map = require('./data/map');
var North = require('./data/north');
var Robot = require('./robot');

Map.setSize(5, 3);

var north = new North(Map);
var robot = new Robot({
	map: Map,
	startDirection: north
});

robot.moveForward();
robot.moveForward();

var position = robot.currentPosition;
console.log(JSON.stringify(position)); //should be 1,3