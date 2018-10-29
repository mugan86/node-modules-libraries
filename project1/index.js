module.exports = {
    /**
     * (0 °C × 9 / 5) + 32 = 32 F
     * @example This is a good example
     * 0ºC is 32ºF
     * @param {*} temperature 
     */
    celsiusToFarenheit: function (temperature) {
        return (this.checkIsANumber(temperature)) ? (temperature * 9 / 5) + 32 : this.errorMessageIsNotANumber();
    },
    /**
     * 0 °C + 273.15 = 273.15 K
     * @param {*} temperature 
     */
    celsiusToKelvin: function (temperature) {
        return (this.checkIsANumber(temperature)) ? temperature + 273.15 : this.errorMessageIsNotANumber();
    },
    /**
     * (0 °F − 32) × 5 / 9 + 273,15 = 255.372 K
     * @example This is a good example
     * 0ºF is 255.372K
     * @param {*} temperature 
     */
    farenheitToKelvin: function (temperature) {
        return  (this.checkIsANumber(temperature)) ? this.farenheitToCelsius(temperature) + 273.15 : this.errorMessageIsNotANumber();
    },
    /**
     * (0 °F − 32) × 5 / 9 = -17,78 °C
     * @example This is a good example
     * 0ºF is -17.78 ºC
     * @param {*} temperature 
     */
    farenheitToCelsius: function (temperature) {
        return (this.checkIsANumber(temperature)) ? (temperature - 32) * 5 / 9 : this.errorMessageIsNotANumber();
    },
    /**
     * 0 K − 273,15 = -273,1 °C
     */
    kelvinToCelsius: function (temperature) {
        return (this.checkIsANumber(temperature)) ? temperature - 273.15 : this.errorMessageIsNotANumber() ;
    },
    /**
     * (0 K − 273,15) × 9 / 5 + 32 = -459,7 °F
     */
    kelvinToFarenheit: function (temperature) {
        return (this.checkIsANumber(temperature)) ? this.celsiusToFarenheit(this.kelvinToCelsius(temperature)) : this.errorMessageIsNotANumber();
    },
    checkIsANumber: function (value) {
        // Si el valor no es un número o el exp no es un entero...
        if (isNaN(value)) {
            return false;
        }
        return true;
    },
    errorMessageIsNotANumber() {
        console.log('The input value is not a number. Please try again please with number value');
    }

}