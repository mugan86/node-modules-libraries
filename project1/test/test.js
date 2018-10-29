var index = require('../index.js');
var expect = require('chai').expect;
var round = require('../decimal');


describe('Check functions (without round)', () => {
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

describe('Check functions (with round using two decimals)', () => {
    const decimalValues = -2;
    it('should return the conversion Celsius to Farenheit is correctly', () => {
        expect(round.round10(index.celsiusToFarenheit(32), decimalValues)).to.equal(89.6);
        expect(round.round10(index.celsiusToFarenheit(32), decimalValues)).to.not.equal(89);
        expect(round.round10(index.celsiusToFarenheit(0), decimalValues)).to.equal(32);
    });
    it('should return the conversion Celsius to Kelvin is correctly', () => {
        expect(round.round10(index.celsiusToKelvin(0), decimalValues)).to.equal(273.15);
        expect(round.round10(index.celsiusToKelvin(0), decimalValues)).to.not.equal(273);
        expect(round.round10(index.celsiusToKelvin(-3), decimalValues)).to.equal(270.15);
    });
    it('should return the conversion Farenheit to Kelvin is correctly', () => {
        expect(round.round10(index.farenheitToKelvin(0), decimalValues)).to.equal(255.37);
        expect(round.round10(index.farenheitToKelvin(53), decimalValues)).to.equal(284.82);
        
    });
    it('should return the conversion Farenheit to celsius is correctly', () => {
        expect(round.round10(index.farenheitToCelsius(0), decimalValues)).to.equal(-17.78);
        expect(round.round10(index.farenheitToCelsius(123), decimalValues)).to.equal(50.56);
    });
    it('should return the conversion Kelvin to Farenheit is correctly', () => {
        expect(round.round10(index.kelvinToCelsius(0), decimalValues)).to.equal(-273.15);
        expect(round.round10(index.kelvinToCelsius(5), decimalValues)).to.equal(-268.15);
    });
    it('should return the conversion Kelvin to Celsius is correctly', () => {
        expect(round.round10(index.kelvinToFarenheit(0), decimalValues)).to.equal(-459.67);
        expect(round.round10(index.kelvinToFarenheit(280), decimalValues)).to.equal(44.33);
    });
});

describe('Check functions (with round using three decimals)', () => {
    const threeDecimalValues = -3;
    it('should return the conversion Farenheit to celsius is correctly', () => {
        expect(round.round10(index.farenheitToCelsius(0), threeDecimalValues)).to.equal(-17.778);
        expect(round.round10(index.farenheitToCelsius(123), threeDecimalValues)).to.equal(50.556);
    });
    it('should return the conversion Kelvin to Farenheit is correctly', () => {
        expect(round.round10(index.kelvinToCelsius(0), threeDecimalValues)).to.equal(-273.15);
        expect(round.round10(index.kelvinToCelsius(5), threeDecimalValues)).to.equal(-268.15);
    });
    it('should return the conversion Kelvin to Celsius is correctly', () => {
        expect(round.round10(index.kelvinToFarenheit(0), threeDecimalValues)).to.equal(-459.67);
        expect(round.round10(index.kelvinToFarenheit(280), threeDecimalValues)).to.equal(44.33);
    });
})
