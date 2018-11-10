"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Take random in value between min (include too) and max value (include).
 * @example
 * This is a good example with min = 1 / max = 6.
 * Psoible results:
 * 1, 3, 4, 2, 6 or 5
 * @param min Min value to use in range to generate random value
 * @param max Max value to use in range to generate random value
 */
function generateRandomValue(min, max) {
    return Math.floor(Math.random() * max) + min;
}
exports.generateRandomValue = generateRandomValue;
/**
 * @example
 * This is a good examples:
 * 2 -> true -> 2 % 2 = 0
 * 7 -> false -> 7 % 2 = 1
 * 8 -> true -> 8 % 2 = 0
 * @param value Value to evaluate is multiplo of 2 (par) or not multiple 2 (odd)
 */
function isParValue(value) {
    if (value % 2 === 0) {
        return true;
    }
    return false;
}
exports.isParValue = isParValue;
