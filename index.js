#!/usr/bin/env node

var random = require('lodash.random');

var jokes = [
	'Atom walks into a bar. The bartender tells him to split. Everyone dies.'
	,'A mouse and an elephant are walking across a bridge. The mouse turns to the elephant and says, "We make a lot of noise."'
	,'A red ball says to a blue ball, "I can bounce higher than you!" The blue ball just sits in silence because it\'s an inanimate object with no mouth.'
	,'git commit -m "once more with feeling"'
	,'We\'ve started calling the bathroom "the gym". Now we can wake up every morning and say we went to the gym. Man, I spent a long time at the gym this morning.'
	,'I wish I could love unicorns, but love isn\'t real.'
	,'Got arrested at the airport. Apparently, security doesn\'t appreciate it when you call "shotgun" before boarding a plane.'
	,'Hammer walks into a bar. Bartender asks him how work went today. "Nailed it!"'
];

console.log('\n'+jokes[random(0, jokes.length-1)]);