#!/usr/bin/env node

var random = require('lodash.random');
var jokes = require('./src/jokes');
var lulz = require('./src/lulz');;

console.log([
    jokes.random(),
    lulz.random()
].join('\n'));
