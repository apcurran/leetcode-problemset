"use strict";

/**
 * solution 1
 * key = n
 * message = m
 * time: O(n + m)
 * space: O(n)
 * 
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
function decodeMessage(key, message) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const uniqueLetters = [...new Set(key.split(" ").join(""))];
    let lettersCodeMapping = new Map();
    let result = "";

    for (let i = 0; i < ALPHABET.length; i++) {
        const alphabetLetter = ALPHABET[i];
        const keyLetter = uniqueLetters[i];
        lettersCodeMapping.set(keyLetter, alphabetLetter);
    }

    for (let char of message) {
        const decodedChar = lettersCodeMapping.get(char) || " ";
        result += decodedChar;
    }

    return result;
}

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
// "this is a secret"
