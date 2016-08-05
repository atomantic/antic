#!/usr/bin/env node

var sample = require('lodash.sample')
var jokes = require('./src/jokes')
var lulz = require('./src/lulz')

console.log([
    sample(jokes),
    sample(lulz)
].join('\n'))
