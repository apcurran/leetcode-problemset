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

    for (let paren of str) {
        if (paren === "(") {
            if (stack.length > 0) {
                result += paren;
            }

            stack.push(paren);
        } else {
            stack.pop();

            if (stack.length > 0) {
                result += paren;
            }
        }
    }

    return result;
}

console.log(removeOuterParentheses("(()())(())")); // "()()()"
