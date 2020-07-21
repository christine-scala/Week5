//write a mocha unit test that tests your triangle function. Be sure to require your triangle.js file (../ because it's a local module) and assert.
var assert=require('assert');
var triangle = require('../triangle.js');

describe('area of triangle', function (){
    it('supposed to return area of triangle', function (){
        assert.equal(triangle(10,2),10);

    });
});