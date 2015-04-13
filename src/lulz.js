'use strict';
var random = require('lodash.random');

var lulz = [
    '\\[^_^]/'
    ,'\\[o_o]/'
    ,'\\[o_9]/'
    ,'\\[-_-]/'
    ,'\\[._.]/'
    ,'¯\\_(ツ)_/¯'
    ,'\\(• ◡ •)/'
    ,'ಠ_ಠ'
    ,'ఠ_ఠ'
    ,'⊙_ʘ'
    ,'⊂(◉‿◉)つ'
];

module.exports = {
    random: function () {
        return lulz[random(0, lulz.length-1)];
    }
};