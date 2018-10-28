var index = require('../index.js');
var expect = require('chai').expect;

describe('Check functions', () => {
    it('should return the conversion Celsius to Farenheit is correctly', () => {
        expect(index.celsiusToFarenheit(32)).to.equal(89.6);
        expect(index.celsiusToFarenheit(32)).to.not.equal(89);
        expect(index.celsiusToFarenheit(0)).to.equal(32);
    });
    it('should return the conversion Celsius to Kelvin is correctly', () => {
        expect(index.celsiusToKelvin(0)).to.equal(273.15);
        expect(index.celsiusToKelvin(0)).to.not.equal(273);
        expect(index.celsiusToKelvin(-3)).to.equal(270.15);
    });
    it('should return the conversion Farenheit to Kelvin is correctly', () => {
        expect(index.farenheitToKelvin(0)).to.equal(255.3722222222222);
        expect(index.farenheitToKelvin(53)).to.equal(284.81666666666666);
        
    });
    it('should return the conversion Farenheit to celsius is correctly', () => {
        expect(index.farenheitToCelsius(0)).to.equal(-17.77777777777778);
        expect(index.farenheitToCelsius(123)).to.equal(50.55555555555556);
    });
    it('should return the conversion Kelvin to Farenheit is correctly', () => {
        expect(index.kelvinToCelsius(0)).to.equal(-273.15);
        expect(index.kelvinToCelsius(5)).to.equal(-268.15);
    });
    it('should return the conversion Kelvin to Celsius is correctly', () => {
        expect(index.kelvinToFarenheit(0)).to.equal(-459.66999999999996);
        expect(index.kelvinToFarenheit(280)).to.equal(44.33000000000004);
    });
});


module.exports = {
   


    /**
     * 0 K − 273,15 = -273,1 °C
     */
    kelvinToCelsius: function (temperature) {
        return temperature - 273.15;
    },
    /**
     * (0 K − 273,15) × 9 / 5 + 32 = -459,7 °F
     */
    kelvinToFarenheit: function (temperature) {
        return this.celsiusToFarenheit(this.kelvinToCelsius(temperature))
    }
}