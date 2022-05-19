"use strict";

/**
 * solution 1
 * n = len of words arr
 * m = len of str in words arr
 * k = len of allowed str
 * time: O(n * m * k)
 * space: O(1)
 * 
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

function countConsistentStrings(allowed, words) {
    let consistentStrsCount = 0;

    outerLoop:
    for (let str of words) {
        for (let char of str) {
            if (!allowed.includes(char)) continue outerLoop;
        }

        consistentStrsCount++;
    }

    return consistentStrsCount;
}

console.log( countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]) ); // 2
console.log( countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]) ); // 7
console.log( countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]) ); // 4
