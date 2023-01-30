"use strict";

/**
 * solution 1
 * n = words array length
 * x = broken letters string length
 * m = word string length
 * time: O(n * x * m)
 * 
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text, brokenLetters) {
    // split text into words arr
    const words = text.split(" ");
    let brokenWordsCount = 0;
    // iterate each word in words arr
    wordLoop: for (let word of words) {
        // iterate brokenLetters str
        for (let brokenLetter of brokenLetters) {
            // check if a broken letter is contained within the current word
            // if so, increment the counter
            if (word.includes(brokenLetter)) {
                brokenWordsCount++;

                continue wordLoop;
            }
        }
    }

    return words.length - brokenWordsCount;
}

console.log( canBeTypedWords("hello world", "ad") ); // 1
