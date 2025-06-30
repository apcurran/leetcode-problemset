"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n * m)
 * space: O(1)
 *
 * @param {string[]} words
 * @return {boolean}
 */
function makeEqual(words) {
    let charsCount = new Map();

    for (let word of words) {
        for (let char of word) {
            const previousCharCount = charsCount.get(char) || 0;
            charsCount.set(char, previousCharCount + 1);
        }
    }

    // return early if not possible to make all equal strings
    for (let charTuple of charsCount) {
        const charCount = charTuple[1];

        // if char count is not divisible by the total words,
        // then it is not possible to distribute this char evenly amongst all for equal strings
        if (charCount % words.length !== 0) return false;
    }

    return true;
}

console.log(makeEqual(["abc", "aabc", "bc"])); // true
console.log(makeEqual(["ab", "a"])); // false
