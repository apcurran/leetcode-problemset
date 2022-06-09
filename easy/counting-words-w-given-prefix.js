"use strict";

/**
 * solution 1 -- regex
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
function prefixCount(words, pref) {
    // use ^WORD regex to start searching from beginning of each word
    const prefixRegex = new RegExp(`^${pref}`);
    let prefixCount = 0;

    for (let word of words) {
        if (prefixRegex.test(word)) prefixCount++;
    }

    return prefixCount;
}

console.log( prefixCount(["pay", "attention", "practice", "attend"], "at") ); // 2
console.log( prefixCount(["leetcode", "win", "loops", "success"], "code") ); // 0
