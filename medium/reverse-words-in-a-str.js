"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function reverseWords(str) {
    // Remove leading or trailing spaces
    // Replace multiple spaces between words with one space
    const oneSpaceBetweenWords = str
        .trim()
        .replace(/ +/g, " ");
    // Split str on spaces
    // Iterate through str arr and reverse order of words
    // Return joined str with single spaces between words
    return oneSpaceBetweenWords
        .split(" ")
        .reverse()
        .join(" ");
}

console.log( reverseWords("the sky is blue") ); // "blue is sky the"
console.log( reverseWords("  hello world  ") ); // "world hello"
console.log( reverseWords("a good   example") ); // "example good a"
