"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function canConstruct(s, k) {
    if (k > s.length) return false;

    // count odd char counts
    // make sure odd counts are <= k
    let charCounts = new Map();

    for (let char of s) {
        const previousCharCount = charCounts.get(char) || 0;
        charCounts.set(char, previousCharCount + 1);
    }

    let oddCharCounts = 0;

    for (let [, currentCharCount] of charCounts) {
        oddCharCounts += currentCharCount % 2;
    }

    return oddCharCounts <= k;
}

console.log(canConstruct("annabelle", 2)); // true
console.log(canConstruct("leetcode", 3)); // false
