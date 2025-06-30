"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number} index of the word in sentence (1-indexed) where searchWord is a prefix of this word
 */
function isPrefixOfWord(sentence, searchWord) {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.startsWith(searchWord)) {
            return i + 1; // 1-indexed
        }
    }

    return -1; // default, not found
}

console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("hellohello hellohellohello", "ell")); // -1
