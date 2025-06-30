"use strict";

/**
 * solution 1 -- stack
 * n = stack length
 * m = chunk length
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {string} str
 * @return {string}
 */
function reverseParentheses(str) {
    let stack = [];

    for (let char of str) {
        if (char === ")") {
            let chunk = [];

            while (stack.at(-1) !== "(") {
                const removedElement = stack.pop();
                chunk.push(removedElement);
            }

            // remove open paren from stack
            stack.pop();
            // add reversed chunk back on to the stack
            stack.push(...chunk);
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}

console.log(reverseParentheses("(u(love)i)")); // "iloveu"
