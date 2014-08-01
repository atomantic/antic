#!/usr/bin/env node

var jokes = require('./jokes.json');
var random = require('lodash.random');

var joke = jokes[random(0, jokes.length-1)];
console.log(joke);