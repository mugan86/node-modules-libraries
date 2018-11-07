/**
* Hello function!
*/
export function getHello () : string {
    return 'hello worldaaa';
}

/**
 * 
 * @param value 
 * @param charToReplace 
 */
export function replaceAll(value: string, charToReplace: string) : string {
    return value.replace(/\w/g, charToReplace);
}

/**
 * [Regex Doc]{@link https://www.w3schools.com/js/js_regexp.asp}
 * Replace  select match value with replace text or char
 * @example This is a good example: text = "Hello" / replace with -> '-' / matchValue = 'l' -> He--o
 * 
 * @param text { string } Desire text to transform
 * @param matchValue { string } Desire change char / text value
 * @param replaceText { string } Desire char / text to replace in match value
 */
export function replaceMatchWithSelectChar(text: string, matchValue: string, replaceText: string = '*' ) {
    return text.replace(new RegExp(matchValue, 'g'), replaceText);
}

/**
 * Take text char count to return length
 * @param text input text to take length string
 */
export function getLength(text: string): number {
    return text.length;
}

/**
 * Invert input text
 * @example
 * This is a good examples:
 * 'hola'--> 'aloh'
 * 'anartz' --> 'ztrana'
 * @param text value to invert in result
 */
export function invertText(text: string): string {
    const valueStr = new String(text);
    const arr = new Array<string>(getLength(text));
    for (let i = 0; i < getLength(text); i++) {
        // console.log(valueStr.charAt(i));
        arr[ (getLength(text) - i)  - 1 ] = valueStr.charAt(i);
    }
    return toStringArray(arr);
}

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
export function toStringArray(arr: any, beetweenValue: string = ''): string {
    return arr.join(beetweenValue);
}