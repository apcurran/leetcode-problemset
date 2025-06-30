"use strict";

/**
 * solution 1 -- hashmap
 * n = s length
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {number}
 */
function minimumLength(s) {
    // count all char frequencies
    let charCounts = new Map();

    for (let char of s) {
        const previousCharCount = charCounts.get(char) || 0;
        charCounts.set(char, previousCharCount + 1);
    }

    let strLength = 0;

    for (let charTuple of charCounts) {
        const charCount = charTuple[1];

        if (charCount % 2 === 0) {
            // if char freq is even -> add 2
            strLength += 2;
        } else {
            // if char freq is odd -> add 1
            strLength += 1;
        }
    }

    return strLength;
}

console.log(minimumLength("abaacbcbb")); // 5
