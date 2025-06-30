"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n + m)
 *
 * @param {string} str
 * @return {string}
 */
function decodeString(str) {
    // use a stack
    let stack = [];

    for (let char of str) {
        if (char === "]") {
            let subStr = "";

            // empty stack until the top of the stack is an opening bracket
            while (stack[stack.length - 1] !== "[") {
                subStr = stack.pop() + subStr;
            }

            // remove opening bracket
            stack.pop();

            let numBeforeOpeningBracket = "";

            while (stack.length > 0 && strValIsDigit(stack[stack.length - 1])) {
                numBeforeOpeningBracket = stack.pop() + numBeforeOpeningBracket;
            }

            const miniStr = subStr.repeat(Number(numBeforeOpeningBracket));
            stack.push(miniStr);
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function strValIsDigit(str) {
    return "0123456789".includes(str);
}

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
