"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
function arrayStringsAreEqual(word1, word2) {
    return word1.join("") === word2.join("");
}

console.log( arrayStringsAreEqual(["ab", "c"], ["a", "bc"]) ); // true
