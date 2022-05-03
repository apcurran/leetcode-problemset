"use strict";

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string} str
 * @return {string}
 */
function makeGood(str) {
    // recursion
    for (let i = 0; i < str.length - 1; i++) {
        const currLetterCharCode = str.charCodeAt(i);
        const nextLetterCharCode = str.charCodeAt(i + 1);

        if ( Math.abs(currLetterCharCode - nextLetterCharCode) === 32 ) {
            // remove first instance where currLetter is lowercase, but same as next letter which is uppercase
            const removedAdjacentChars = str.slice(0, i) + str.slice(i + 2);
            // repeat until satisfied
            return makeGood(removedAdjacentChars);
        }
    }

    return str;
}

console.log( makeGood("leEeetcode") ); // "leetcode"
console.log( makeGood("abBAcC") ); // ""
