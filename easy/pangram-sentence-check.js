"use strict";

/**
 * Solution 1 -- O(n)
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const sortedSentenceChars = sentence.split("").sort();
    const uniqueSentenceChars = new Set(sortedSentenceChars);
    const joinedUniqueChars = [...uniqueSentenceChars].join("");

    return joinedUniqueChars === alphabetStr;
}

console.log( checkIfPangram("thequickbrownfoxjumpsoverthelazydog") ); // true
console.log( checkIfPangram("leetcode") ); // false