"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {string}
 */
function generateTheString(n) {
    if (n % 2 === 0) {
        // even n
        return "a".repeat(n - 1) + "b";
    } else {
        return "a".repeat(n);
    }
}

console.log(generateTheString(4)); // "aaab"
