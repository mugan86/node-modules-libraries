module.exports = {
    /**
     * 
     * @param {*} tempetature 
     */
    celsiusToFarenheit: function (tempetature) {
        return (tempetature * 9 / 5) + 32
    },
    /**
     * 
     * @param {*} tempetature 
     */
    farenheitToCelsius: function (tempetature) {
        return (tempetature - 32) * 5 / 9 ;
    }
}