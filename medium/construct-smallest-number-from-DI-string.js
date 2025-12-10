"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 *
 * @param {string} pattern
 * @return {string}
 */
function smallestNumber(pattern) {
    let result = [];
    let stack = [];

    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);

        while (stack.length > 0 && (i === pattern.length || pattern[i] === "I")) {
            result.push(String(stack.pop()));
        }
    }

    return result.join("");
}

console.log(smallestNumber("IIIDIDDD")); // "123549876"
