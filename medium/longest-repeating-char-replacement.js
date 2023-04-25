"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
function characterReplacement(str, k) {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    let charsCache = new Map();

    while (right < str.length) {
        const currentRightChar = str[right];
        const previousCharCount = charsCache.get(currentRightChar) || 0;
        const updatedCharCount = previousCharCount + 1;
        charsCache.set(currentRightChar, updatedCharCount);

        if (updatedCharCount > maxCharCount) {
            maxCharCount = updatedCharCount;
        }

        const windowLength = right - left + 1;

        if (windowLength - maxCharCount > k) {
            // shrink window by moving left pointer
            const currentLeftChar = str[left];
            const currentLeftCharCount = charsCache.get(currentLeftChar);
            charsCache.set(currentLeftChar, currentLeftCharCount - 1);
            left++;
        }

        right++;
    }

    return right - left;
}

console.log( characterReplacement("ABAB", 2) ); // 4
console.log( characterReplacement("AABABBA", 1) ); // 4
