"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
    let charSet = new Set();
    let maxSubstrLen = 0;
    let left = 0;
    let right = 0;

    while (right < str.length) {
        const leftChar = str[left];
        const rightChar = str[right];

        if (charSet.has(rightChar)) {
            charSet.delete(leftChar);
            left++;
        } else {
            charSet.add(rightChar);
            right++;
        }

        const currSubstrLen = right - left;
        maxSubstrLen = Math.max(maxSubstrLen, currSubstrLen);
    }

    return maxSubstrLen;
}

console.log( lengthOfLongestSubstring("abcabcbb") ); // 3
