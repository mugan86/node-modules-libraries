module.exports = {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  type  The adjust type.
     * @param {Number}  value The number.
     * @param {Integer} exp   Exponent (el logaritmo 10 del ajuste base).
     * @returns {Number} The adjust value.
     */
    decimalAdjust: function (type, value, exp) {
        // Si el exp no está definido o es cero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Si el valor no es un número o el exp no es un entero...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    },

    // Decimal round
    round10: function (value, exp) {
        return this.decimalAdjust('round', value, exp);
    },
    // Decimal floor
    floor10: function (value, exp) {
        return this.decimalAdjust('floor', value, exp);
    },
    // Decimal ceil
    ceil10: function (value, exp) {
        return this.decimalAdjust('ceil', value, exp);
    }
};
