'use strict'

var assert = require('chai').assert
var exec = require('child_process').exec

describe('antic', function() {
  it('tells a joke', function(done) {
    exec('node '+__dirname+'/..', function(error, stdout, stderr) {
      console.error(stdout)
      assert.isNull(error)
      assert(stdout)
      assert.equal(stderr, '')
      done()
    })
  })
})
