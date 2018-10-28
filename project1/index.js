module.exports = {
    /**
     * (0 °C × 9 / 5) + 32 = 32 F
     * @example This is a good example
     * 0ºC is 32ºF
     * @param {*} tempetature 
     */
    celsiusToFarenheit: function (tempetature) {
        return (tempetature * 9 / 5) + 32
    },
    /**
     * 0 °C + 273.15 = 273.15 K
     * @param {*} temperature 
     */
    celsiusToKelvin: function (temperature) {
        return temperature + 273.15;
    },
    /**
     * (0 °F − 32) × 5 / 9 + 273,15 = 255.372 K
     * @example This is a good example
     * 0ºF is 255.372K
     * @param {*} temperature 
     */
    farenheitToKelvin: function (temperature) {
        return  this.farenheitToCelsius(temperature) + 273.15
    },
    /**
     * (0 °F − 32) × 5 / 9 = -17,78 °C
     * @example This is a good example
     * 0ºF is -17.78 ºC
     * @param {*} tempetature 
     */
    farenheitToCelsius: function (tempetature) {
        return (tempetature - 32) * 5 / 9 ;
    },
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