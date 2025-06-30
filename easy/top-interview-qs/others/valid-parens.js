"use strict";

/** Valid Solution 1
 * @param {string} str
 * @return {boolean}
 */
function isValid(str) {
    if (str === "") return true;

    if (str.length < 2) return false;

    const pairBrackets = new Map([
        ["{", "}"],
        ["(", ")"],
        ["[", "]"],
    ]);
    let openBracketStack = [];

    for (let i = 0; i < str.length; i++) {
        let currBracket = str[i];

        if (pairBrackets.has(currBracket)) {
            // Open bracket match
            openBracketStack.push(currBracket);
        } else {
            // Closing bracket match
            let checkBracket = openBracketStack.pop();

            if (pairBrackets.get(checkBracket) !== currBracket) {
                return false;
            }
        }
    }

    if (openBracketStack.length > 0) return false;

    return true;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
