'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
    it('should return Boys', () => {
        var result = index.getHello();
        expect(result).to.equal('hello worldaaa');
    });
    it('should Not equal', () => {
        var result = index.getHello();
        expect(result).to.not.equal('hello worldaaaaaaaaa');
    });
});