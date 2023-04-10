"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {boolean}
 */
function isValid(str) {
    let stack = [];

    for (let currentBracket of str) {
        switch (currentBracket) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default: {
                const expectedClosingBracket = stack.pop();

                if (currentBracket !== expectedClosingBracket) return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
