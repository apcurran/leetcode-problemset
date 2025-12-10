"use strict";

// /**
//  * solution 1 -- sort and compare
//  * time: O((s * log s) + (t * log t))
//  * space: O(s + t)
//  *
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// function isAnagram(s, t) {
//     const sSorted = s
//                         .split("")
//                         .sort()
//                         .join("");
//     const tSorted = t
//                         .split("")
//                         .sort()
//                         .join("");

//     return sSorted === tSorted;
// }

/**
 * solution 1 -- hashmaps
 * time: O(s + t)
 * space: O(s + t)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    let sLetters = new Map();

    for (let char of s) {
        const previousCount = sLetters.get(char) || 0;
        sLetters.set(char, previousCount + 1);
    }

    let tLetters = new Map();

    for (let char of t) {
        const previousCount = tLetters.get(char) || 0;
        tLetters.set(char, previousCount + 1);
    }

    // now compare maps
    const largestLettersCache = sLetters.size >= tLetters.size ? sLetters : tLetters;

    for (let tuple of largestLettersCache) {
        const char = tuple[0];
        const sCharCount = sLetters.get(char);
        const tCharCount = tLetters.get(char);

        if (sCharCount !== tCharCount) return false;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
