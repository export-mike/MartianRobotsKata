var Map = require('./data/map');
var North = require('./data/north');
var West = require('./data/west');
var Robot = require('./robot');
var LostRobotService = require('./services/lost-robot-service');

Map.setSize(5, 3);

var lostRobotService = new LostRobotService();
var north = new North(Map);
var robot1 = new Robot({
	map: Map,
	startPosition: {
		x: 3,
		y: 2
	},
	startDirection: north,
	lostRobotService: lostRobotService
});

console.log(robot1.processCommands('FRRFLLFFRRFLL'));

var west = new West(Map);
var robot2 = new Robot({
	map: Map,
	startPosition: {
		x: 0,
		y: 3
	},
	startDirection: west,
	lostRobotService: lostRobotService
});

console.log(robot2.processCommands('LLFFFLFLFL'));