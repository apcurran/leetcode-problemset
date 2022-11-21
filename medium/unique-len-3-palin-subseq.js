"use strict";

/**
 * solution 1 -- correct, but TLE
 * n = str len
 * m = total num of three letter palindromes in str
 * time: O(n^3)
 * space: O(m)
 * 
 * @param {string} s
 * @return {number}
 */
function countPalindromicSubsequence(s) {
    let palinSet = new Set();

    for (let i = 0; i < s.length; i++) {
        const firstChar = s[i];

        for (let j = i + 1; j < s.length; j++) {
            const secondChar = s[j];

            for (let k = j + 1; k < s.length; k++) {
                const thirdChar = s[k];
                const possiblePalinStr = firstChar + secondChar + thirdChar;

                if (isThreeLenStrPalindrome(possiblePalinStr)) {
                    palinSet.add(possiblePalinStr);
                }
            }
        }
    }

    return palinSet.size;
}

/**
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function isThreeLenStrPalindrome(str) {
    return str[0] === str[2];
}

console.log( countPalindromicSubsequence("aabca") ); // 3
