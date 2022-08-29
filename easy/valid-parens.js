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
    // track num of opening brackets seen so far, incr if adding one, decr if removing one
    // if count falls < 0, return false early
    let stack = [];

    for (let bracket of str) {
        switch (bracket) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default:
                const elem = stack.pop();

                if (bracket !== elem) return false;
        }
    }

    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
