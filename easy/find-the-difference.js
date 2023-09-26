"use strict";

// /**
//  * Solution 1
//  * n = t length
//  * Time: O(n log n) -- due to sorting of strings
//  * Space: O(n)
//  * 
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// function findTheDifference(s, t) {
//     const sortedS = s
//                         .split("")
//                         .sort();
//     const sortedT = t
//                         .split("")
//                         .sort();

//     for (let i = 0; i < sortedT.length; i++) {
//         const currTChar = sortedT[i];
//         const currSChar = sortedS[i];
        
//         // Check curr t char and compare to curr s char
//         if (currSChar !== currTChar) {
//             // If different, return curr t char (diff char)
//             return currTChar;
//         }
//     }
// }

/**
 * Solution 2
 * n = t length
 * Time: O(n) -- t is the same s length + 1
 * Space: O(1) -- technically O(26) since there are only 26 alpha chars
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function findTheDifference(s, t) {
    let sMap = new Map();
    let tMap = new Map();

    for (let char of s) {
        const previousCount = sMap.get(char) || 0;
        sMap.set(char, previousCount + 1);
    }

    for (let char of t) {
        if (!sMap.has(char)) return char;

        const previousTCharCount = tMap.get(char) || 0;
        const updatedTCharCount = previousTCharCount + 1;

        const sCharCount = sMap.get(char);

        if (sCharCount < updatedTCharCount) return char;

        tMap.set(char, updatedTCharCount);
    }

    return "Not found";
}

console.log( findTheDifference("abcd", "abcde") ); // "e"
console.log( findTheDifference("adz", "abdz") ); // "b"
console.log( findTheDifference("", "y") ); // "y"
