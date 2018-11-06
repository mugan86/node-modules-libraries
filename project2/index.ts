/**
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
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