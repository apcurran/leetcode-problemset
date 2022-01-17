"use strict";

/**
 * Solution 1
 * Time: O(n log n) -- due to sorting of strings
 * Space: O(n)
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function findTheDifference(s, t) {
    const sortedS = s
                        .split("")
                        .sort();
    const sortedT = t
                        .split("")
                        .sort();

    for (let i = 0; i < sortedT.length; i++) {
        const currTChar = sortedT[i];
        const currSChar = sortedS[i];
        
        // Check curr t char and compare to curr s char
        if (currSChar !== currTChar) {
            // If different, return curr t char (diff char)
            return currTChar;
        }
    }
}

console.log( findTheDifference("abcd", "abcde") ); // "e"
console.log( findTheDifference("adz", "abdz") ); // "b"
console.log( findTheDifference("", "y") ); // "y"
