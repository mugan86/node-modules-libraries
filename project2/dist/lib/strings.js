"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Hello function!
*/
function getHello() {
    return 'hello worldaaa';
}
exports.getHello = getHello;
/**
 *
 * @param value
 * @param charToReplace
 */
function replaceAll(value, charToReplace) {
    return value.replace(/\w/g, charToReplace);
}
exports.replaceAll = replaceAll;
/**
 * [Regex Doc]{@link https://www.w3schools.com/js/js_regexp.asp}
 * Replace  select match value with replace text or char
 * @example This is a good example: text = "Hello" / replace with -> '-' / matchValue = 'l' -> He--o
 *
 * @param text { string } Desire text to transform
 * @param matchValue { string } Desire change char / text value
 * @param replaceText { string } Desire char / text to replace in match value
 */
function replaceMatchWithSelectChar(text, matchValue, replaceText) {
    if (replaceText === void 0) { replaceText = '*'; }
    return text.replace(new RegExp(matchValue, 'g'), replaceText);
}
exports.replaceMatchWithSelectChar = replaceMatchWithSelectChar;
/**
 * Take text char count to return length
 * @param text input text to take length string
 */
function getLength(text) {
    return text.length;
}
exports.getLength = getLength;
/**
 * Invert input text
 * @example
 * This is a good examples:
 * 'hola'--> 'aloh'
 * 'anartz' --> 'ztrana'
 * @param text value to invert in result
 */
function invertText(text) {
    var valueStr = new String(text);
    var arr = new Array(getLength(text));
    for (var i = 0; i < getLength(text); i++) {
        // console.log(valueStr.charAt(i));
        arr[(getLength(text) - i) - 1] = valueStr.charAt(i);
    }
    return toStringArray(arr);
}
exports.invertText = invertText;
/**
 * Return array in one string result concat.
 * @example
 * This is a good examples:
 * arr => ['Anartz', 'Mugika', 'Ledo'] / betweenValue = ' ' -> 'Anartz Mugika Ledo'
 * arr => ['Anartz', 'Mugika', 'Ledo'] -> 'AnartzMugikaLedo'
 * arr => [1, 2, 3, 4, 5] / betweenValue = ', ' -> '1, 2, 3, 4, 5'
 * @param arr Array with values in diferent formats that want concat
 * @param beetweenValue value to add between concat values
 */
function toStringArray(arr, beetweenValue) {
    if (beetweenValue === void 0) { beetweenValue = ''; }
    return arr.join(beetweenValue);
}
exports.toStringArray = toStringArray;
