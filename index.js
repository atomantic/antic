'use strict';
var jokes = require('./jokes.json');
var random = require('lodash.random');

module.exports = function atomanticjokes() {
	return jokes[random(0, jokes.length-1)];
};
