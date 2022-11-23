"use strict";

/**
 * solution 1 -- correct, but TLE
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
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    let revvedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revvedStr += str[i];
    }

    return revvedStr === str;
}

console.log( longestPalindrome("babad") ); // "bab"
