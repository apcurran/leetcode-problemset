"use strict";

// /**
//  * Solution 1
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {string} str
//  * @return {number}
//  */
// function firstUniqChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         let isRepeated = false;

//         for (let j = 0; j < str.length; j++) {
//             const nextChar = str[j];

//             if (nextChar === char && i !== j) {
//                 isRepeated = true;
//             }
//         }

//         if (!isRepeated) return i;
//     }

//     // No char is non-repeating
//     return -1;
// }

/**
 * Solution 2 -- fastest submission
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {number}
 */
function firstUniqChar(str) {
    let charMap = new Map();
    // Iterate through string
    for (let char of str) {
        if (!charMap.has(char)) {
            // Store curr char in a map obj
            charMap.set(char, 1);
        } else {
            // Incr the count of the char occurrences
            const prevCharVal = charMap.get(char);
            charMap.set(char, prevCharVal + 1);
        }
    }

    // Check for a char in the map with an occurrence val of 1
    for (let [char, charVal] of charMap) {
        if (charVal === 1) {
            // return index of char -- not O(n^2) operation, since it only executes when charVal === 1 (which should only run max once)
            return str.indexOf(char);
        }
    }
    // If none exist with an occurrence of 1, then return -1
    return -1;
}

// /**
//  * Solution 3
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} str
//  * @return {number}
//  */
// function firstUniqChar(str) {
//     let charMap = new Map();
//     // Iterate through string
//     for (let i = 0; i < str.length; i++) {
//         const currChar = str[i];

//         if (!charMap.has(currChar)) {
//             // Store curr char in a map obj
//             // Store index with char occurrences as val to fetch later!
//             // Ex. val = 0:1 -- index 0 and occurrences of 1
//             const charVal = `${i}:1`;
//             charMap.set(currChar, charVal);
//         } else {
//             // Incr the count of the char occurrences
//             // Parse str for char val first
//             const prevCharVal = Number(charMap.get(currChar).split(":")[1]);
//             const incrementedCharVal = prevCharVal + 1;

//             charMap.set(currChar, `${i}:${incrementedCharVal}`);
//         }
//     }

//     // Check for a char in the map with an occurrence val of 1
//     for (let charVal of charMap.values()) {
//         const charValIndex = Number(charVal.split(":")[0]);
//         const charValNum = Number(charVal.split(":")[1]);

//         if (charValNum === 1) return charValIndex;
//     }
//     // If none exist with an occurrence of 1, then return -1
//     return -1;
// }

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
console.log(firstUniqChar("dddccdbba")); // 8
