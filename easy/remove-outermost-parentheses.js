"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function removeOuterParentheses(str) {
    let stack = [];
    let result = "";

    for (let char of str) {
        if (char === "(") {
            if (stack.length > 0) {
                result += char;
            }

            stack.push(char);
        } else {
            stack.pop();

            if (stack.length > 0) {
                result += char;
            }
        }
    }

    return result;
}

console.log(removeOuterParentheses("(()())(())")); // "()()()"
