var Map = require('./data/map');
var North = require('./data/north');
var West = require('./data/west');
var Robot = require('./robot');
var LostRobotService = require('./services/lost-robot-service');
var RobotsInputProcessor = require('./robots-input-processor');


var path = require('path');

// var inputFile1 = require('fs').readFileSync(path.join(__dirname, 'input/input1.txt'), "utf8");
// var expectedFile1 = require('fs').readFileSync(path.join(__dirname, 'expected/expected1.txt'), "utf8");


var inputFile1 = require('fs').readFileSync(path.join(__dirname, './input/input2.txt'), "utf8");
var expectedFile1 = require('fs').readFileSync(path.join(__dirname, './expected/expected2.txt'), "utf8");

var robotInputProcessor = new RobotsInputProcessor();

var output = robotInputProcessor.processInput(inputFile1);
console.log(output);