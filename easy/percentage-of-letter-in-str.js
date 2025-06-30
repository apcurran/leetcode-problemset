"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @param {string} letter
 * @return {number}
 */
function percentageLetter(s, letter) {
    // count letter in s
    let sLetterCount = 0;

    for (let char of s) {
        if (char === letter) {
            sLetterCount++;
        }
    }

    // take letter count and divide by s length
    // this quotient should be multiplied by 100 and rounded down
    return Math.floor((sLetterCount / s.length) * 100);
}

console.log(percentageLetter("foobar", "o")); // 33 (percent)
