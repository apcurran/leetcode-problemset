"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
    const maxLen = Math.max(word1.length, word2.length);
    let resWord = "";

    for (let i = 0; i < maxLen; i++) {
        const charsChunk = (word1[i] || "") + (word2[i] || "");
        resWord += charsChunk;
    }

    return resWord;
}

console.log( mergeAlternately("abc", "pqr") ); // "apbqcr"
console.log( mergeAlternately("ab", "pqrs") ); // "apbqrs"
