"use strict";

/**
 * O(n)
 * @param {string} str
 * @return {number}
 */
function lengthOfLastWord(str) {
    const trimmedStr = str.trim();
    const lastWord = trimmedStr
        .split(" ")
        .slice(-1)[0];

    return lastWord.length;
}

console.log( lengthOfLastWord("Hello World") ); // 5
console.log( lengthOfLastWord("   fly me   to   the moon  ") ); // 4
