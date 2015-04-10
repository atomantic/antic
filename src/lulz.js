'use strict';
var random = require('lodash.random');

module.exports = {
    random: function () {
        return lulz[random(0, lulz.length-1)];
    }
};

var lulz = [
    '\\[^_^]/'
    ,'\\[o_o]/'
    ,'\\[o_9]/'
    ,'\\[-_-]/'
    ,'\\[._.]/'
    ,'¯\\_(ツ)_/¯'
    ,'ಠ_ಠ'
];
