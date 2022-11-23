"use strict";

/**
 * solution 1 -- correct, but TLE
 * m = subStr len
 * time: O(n^3)
 * space: O(n + m)
 * 
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let maxPalinStr = "";

    for (let i = 0; i < s.length; i++) {
        let subStr = "";

        for (let j = i; j < s.length; j++) {
            const subStrChar = s[j];
            subStr += subStrChar;

            if (isPalindrome(subStr)) {
                // check if longer than max to replace
                if (subStr.length > maxPalinStr.length) {
                    maxPalinStr = subStr;
                }
            }
        }
    }

    return maxPalinStr;
}

/**
 * solution 1 -- two-pointer approach
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
}

console.log( longestPalindrome("babad") ); // "bab"
