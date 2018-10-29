# Temperature conversions module.

In this module we have three types temperature: Celsius, Farenheit and Kelvin.

To use this module, we must follow this instructions:

* 1.- Create *.js file in desire location.
* 2.- Install npm module : ```npm i simple-temperature-conversor --save```
* 3.- Open the *.js file and add import to start to use library.
```
var conversions = require('simple-temperature-conversor');
var round = require('simple-temperature-conversor/decimal');
const defaultDecimals = -2;

```

* 4.- If you import correctly library, use example:
```
console.log(conversion.farenheitToKelvin(0));
console.log(conversion.farenheitToCelsius(123));
console.log(conversion.celsiusToFarenheit(32));

// Result with use round module
console.log(round.round10(conversion.farenheitToKelvin(0), defaultDecimals));
console.log(round.round10(conversion.farenheitToCelsius(123), defaultDecimals));
console.log(round.round10(conversion.celsiusToFarenheit(32), defaultDecimals));

// Round
console.log(round.round10(55.55, -1));   // 55.6
console.log(round.round10(55.549, -1));  // 55.5
console.log(round.round10(55, 1));       // 60
console.log(round.round10(54.9, 1));     // 50
console.log(round.round10(-55.55, -1));  // -55.5
console.log(round.round10(-55.551, -1)); // -55.6
console.log(round.round10(-55, 1));      // -50
console.log(round.round10(-55.1, 1));    // -60
console.log(round.round10(1.00529010192, -4));   // 1.0053
// Floor
console.log(round.floor10(55.59, -1));   // 55.5
console.log(round.floor10(59, 1));       // 50
console.log(round.floor10(-55.51, -1));  // -55.6
console.log(round.floor10(-51, 1));      // -60
// Ceil
console.log(round.ceil10(55.51, -1));    // 55.6
console.log(round.ceil10(51, 1));        // 60
console.log(round.ceil10(-55.59, -1));   // -55.5
console.log(round.ceil10(-59, 1));       // -50
```

## More details in:
https://www.npmjs.com/package/simple-temperature-conversor