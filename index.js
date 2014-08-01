#!/usr/bin/env node

var random = require('lodash.random');

var jokes = [
	"Atom walks into a bar. The bartender tells him to split. Everyone dies."
	,"A mouse and an elephant are walking across a bridge. The mouse turns to the elephant and says, \"We make a lot of noise.\""
	,"A red ball says to a blue ball, \"tomorrow, I'm gonna be yellow.\" the blue ball just sits in silence because it's an inanimate object with no mouth."
];

console.log(jokes[random(0, jokes.length-1)]);