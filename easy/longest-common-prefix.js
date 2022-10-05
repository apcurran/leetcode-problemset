"use strict";

/**
 * solution 1 -- iterative
 * n = strs arr len
 * m = word len
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let maxPrefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let word of strs) {
            // if i goes past the end boundary of the word OR
            // if the current word's letter is not equal to the first word's letter at this position
            // return early
            if (i === word.length || word[i] !== strs[0][i]) {
                return maxPrefix;
            }
        }

        maxPrefix += strs[0][i];
    }

    return maxPrefix;
}

console.log( longestCommonPrefix(["flower","flow","flight"]) ); // "fl"
