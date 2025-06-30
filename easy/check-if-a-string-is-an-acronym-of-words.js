"use strict";

/**
 * solution 1
 * n = words.length
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
function isAcronym(words, s) {
    let firstLetters = "";

    for (let word of words) {
        const firstLetter = word[0];
        firstLetters += firstLetter;
    }

    return s === firstLetters;
}

console.log(isAcronym(["alice", "bob", "charlie"], "abc")); // true
console.log(isAcronym(["an", "apple"], "a")); // false
