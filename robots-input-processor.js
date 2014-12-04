var Map = require('./data/map');
var Robot = require('./robot');
var DirectionFactory = require('./factories/direction-factory');

function RobotInputProcessor() {
	var inputLines = [];
	var robotsToProcess = [];


	this.processInput = function(input) {
		inputLines = input.split('\n');

		setMapSize();

		var i = 0;
		for (i = 0; i < inputLines.length; i++) {
			var line = inputLines[i];
			var values = line.split(' ');

			if (values.length === 3) {

				robotsToProcess.push({
					x: values[0],
					y: values[1],
					directionChar: values[2],
					commands: inputLines[i + 1]
				});

				i=i+1;
			}
		}

		var output = '';
		robotsToProcess.forEach(function(robotToProcess) {
			var Direction = DirectionFactory.get(robotToProcess.directionChar);

			var robot = new Robot({
				map: Map,
				startDirection: new Direction(Map),
				startPosition: {
					x: robotToProcess.x,
					y: robotToProcess.y
				}
			});

			output += robot.processCommands(robotToProcess.commands) + '\n';
		});
		return output;

	};

	function setMapSize() {
		var values;
		if (inputLines.length) {
			values = inputLines[0].split(' ');
			inputLines.splice(0, 1);
		}
	}

}

module.exports = RobotInputProcessor;