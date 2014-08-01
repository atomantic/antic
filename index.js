#!/usr/bin/env node

var random = require('lodash.random');

var jokes = [
	"Atom walks into a bar. The bartender tells him to split. Everyone dies.",
	"A mouse and an elephant are walking across a bridge. The mouse turns to the elephant and says, \"We make a lot of noise.\""
];

console.log(jokes[random(0, jokes.length-1)]);