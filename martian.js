var Map = require('./data/map');
var North = require('./data/north');
var Robot = require('./robot');

Map.setSize(5, 3);

var north = new North(Map);
var robot = new Robot({
	map: Map,
	startDirection: north,
	startPosition:{
		x:3,
		y:2
	}
});

console.log(robot.processCommands('FRRFLLFFRRFLL'));

var position = robot.currentPosition;
console.log(JSON.stringify(position)); //should be 3,2 N Lost	