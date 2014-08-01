/* global describe, it*/
'use strict';
var chai = require('chai'),
		expect = chai.expect,
		atomanticjokes = require('../');

describe('atomanticjokes', function() {
	it('should export a function', function() {
		expect(atomanticjokes).to.be.a('function');
	});

	it('should return a joke', function() {
		var joke = atomanticjokes();
		expect(joke).to.be.a('string');
	});

	it('should be funny', function() {
		/* jshint expr:true*/
		var joke = atomanticjokes();
		expect(joke.laugher).to.exist;
	});
});
