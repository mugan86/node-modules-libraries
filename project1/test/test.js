var index = require('../index.js');
var expect = require('chai').expect;

describe('Check functions', () => {
    it('should return the conversion 32ºC to Farenheit is 89.6F', () => {
        var result = index.celsiusToFarenheit(32);
        expect(result).to.equal(89.6);
    });
});