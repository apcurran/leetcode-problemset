"use strict";

/**
 * solution 1 -- dynamic programming bottom-up
 * time: O(n^2 * m)
 * space: O(n + m)
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
    let dpCache = new Array(s.length + 1).fill(false);
    // base case -> set last element to true
    dpCache[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            if (i + word.length <= s.length &&
                s.slice(i, i + word.length) === word
            ) {
                // there are enough chars in s for us to compare them AND
                // the words are the same
                dpCache[i] = dpCache[i + word.length];
            }

            if (dpCache[i] === true) {
                break;
            }
        }
    }

    return dpCache[0];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // true
