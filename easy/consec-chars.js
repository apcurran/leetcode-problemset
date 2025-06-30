"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @return {number}
 */
function maxPower(str) {
    // single-pass
    let maxPower = 1;
    let uniqueCharFrequency = 1; // count current char first

    for (let i = 1; i < str.length; i++) {
        const currentChar = str[i];
        const previousChar = str[i - 1];

        if (currentChar === previousChar) {
            uniqueCharFrequency++;
        } else {
            // update maxPower
            maxPower = Math.max(maxPower, uniqueCharFrequency);
            // reset counter
            uniqueCharFrequency = 1;
        }
    }

    maxPower = Math.max(maxPower, uniqueCharFrequency);

    return maxPower;
}

console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5
console.log(maxPower("cc")); // 2
