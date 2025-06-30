"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} num
 * @return {string}
 */
function largestOddNumber(num) {
    // iterate backwards
    for (let i = num.length - 1; i >= 0; i--) {
        const currDigit = Number(num[i]);

        if (currDigit % 2 === 0) continue;

        // odd digit
        // get full num from start as str
        return num.slice(0, i + 1);
    }

    return "";
}

console.log(largestOddNumber("52")); // "5"
console.log(largestOddNumber("4206")); // ""
console.log(largestOddNumber("35427")); // "35427"
