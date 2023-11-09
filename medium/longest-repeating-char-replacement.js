"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @param {number} k
//  * @return {number}
//  */
// function characterReplacement(str, k) {
//     let left = 0;
//     let right = 0;
//     let maxCharCount = 0;
//     let charsCache = new Map();

//     while (right < str.length) {
//         const currentRightChar = str[right];
//         const previousCharCount = charsCache.get(currentRightChar) || 0;
//         const updatedCharCount = previousCharCount + 1;
//         charsCache.set(currentRightChar, updatedCharCount);

//         if (updatedCharCount > maxCharCount) {
//             maxCharCount = updatedCharCount;
//         }

//         const windowLength = right - left + 1;

//         if (windowLength - maxCharCount > k) {
//             // shrink window by moving left pointer
//             const currentLeftChar = str[left];
//             const currentLeftCharCount = charsCache.get(currentLeftChar);
//             charsCache.set(currentLeftChar, currentLeftCharCount - 1);
//             left++;
//         }

//         right++;
//     }

//     return right - left;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
function characterReplacement(str, k) {
    let charCounts = new Map();
    let left = 0;
    let result = 0;

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];
        const charCount = charCounts.get(currentChar) || 0;
        charCounts.set(currentChar, charCount + 1);
        const charAmtToReplace = getWindowLength(left, right) - getMax(charCounts.values());

        if (charAmtToReplace > k) {
            // k is not large enough to support replacing more chars,
            // shrink window
            const leftChar = str[left];
            const leftCharCount = charCounts.get(leftChar);
            charCounts.set(leftChar, leftCharCount - 1);
            left++;
        }

        result = Math.max(result, getWindowLength(left, right));
    }

    return result;
}

/**
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function getWindowLength(left, right) {
    return right - left + 1;
}

/**
 * @param {Iterable} iterable 
 * @returns {number}
 */
function getMax(iterable) {
    let max = -Infinity;

    for (let num of iterable) {
        max = Math.max(max, num);
    }

    return max;
}

console.log( characterReplacement("ABAB", 2) ); // 4
console.log( characterReplacement("AABABBA", 1) ); // 4
