"use strict";

/**
 * solution 1
 * n = words length
 * m = chars length in each word
 * k = chars parameter string length
 * time: O(n * m + k)
 * space: O(m + k)
 *
 * @param {string[]} words
 * @param {string} chars
 * @return {number} sum of the lengths of all "good" strings in words
 */
function countCharacters(words, chars) {
    // count chars and frequencies
    let availableChars = new Map();

    for (let char of chars) {
        const previousCount = availableChars.get(char) || 0;
        availableChars.set(char, previousCount + 1);
    }

    let goodStrLengthsSum = 0;
    // iterate each word in words array
    wordsLoop: for (let word of words) {
        let currentWordChars = new Map();
        // iterate chars in current word
        for (let char of word) {
            // count each char and frequency
            const previousCount = currentWordChars.get(char) || 0;
            currentWordChars.set(char, previousCount + 1);
        }
        // iterate chars and compare frequency to availableChars
        for (let [currentWordChar, currentWordCharCount] of currentWordChars) {
            if (!availableChars.has(currentWordChar)) {
                // skip this word
                continue wordsLoop;
            }

            // this char is within the Map, now check if frequency is less than or equal
            const availableCharsCharCount = availableChars.get(currentWordChar);

            if (currentWordCharCount > availableCharsCharCount) {
                continue wordsLoop;
            }
        }

        // if the code reaches this point, it's a valid "good" word
        goodStrLengthsSum += word.length;
    }

    return goodStrLengthsSum;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // 6
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")); // 10
