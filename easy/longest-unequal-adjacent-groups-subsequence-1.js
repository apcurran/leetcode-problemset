"use strict";

/**
 * solution 1 -- greedy
 * time: O(n)
 * space: O(1) -- without results array included
 *
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
function getLongestSubsequence(words, groups) {
    let results = [];

    for (let i = 0; i < words.length; i++) {
        if (i === 0 || groups[i] !== groups[i - 1]) {
            results.push(words[i]);
        }
    }

    return results;
}

console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1])); // ["e", "b"]
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1])); // ["a", "b", "c"]
