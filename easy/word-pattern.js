"use strict";

/**
 * solution 1 -- map
 * time: O(n)
 * space: O(n + m)
 * 
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
    const wordsArr = s.split(" ");

    if (pattern.length !== wordsArr.length) return false;

    let charToWord = new Map();
    let wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = wordsArr[i];

        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
}

console.log( wordPattern("abba", "dog cat cat dog") ); // true
console.log( wordPattern("abba", "dog cat cat fish") ); // false
console.log( wordPattern("abba", "dog dog dog dog") ); // false
