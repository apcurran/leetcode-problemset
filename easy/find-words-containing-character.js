"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n) -- (if return value is counted)
 * 
 * @param {string[]} words
 * @param {string} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
    let results = [];

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        if (currentWord.includes(x)) {
            results.push(i);
        }
    }

    return results;
}

console.log(findWordsContaining(["leet", "code"], "e")); // [0, 1]
