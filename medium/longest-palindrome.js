"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(52) -> O(1) -- only 52 unique upper/lower chars
 * 
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
    let charsCount = new Map();
    let longestPalindromeSize = 0;

    for (let char of s) {
        const previousCharCount = charsCount.get(char) || 0;
        const updatedCharCount = previousCharCount + 1;
        charsCount.set(char, updatedCharCount);

        // if even count of char
        if (updatedCharCount % 2 === 0) {
            longestPalindromeSize += 2;
        }
    }

    for (let charTuple of charsCount) {
        const charCount = charTuple[1];
        // if there is an odd count,
        // increase result by 1
        if (charCount % 2 === 1) {
            longestPalindromeSize += 1;

            break;
        }
    }

    return longestPalindromeSize;
}

console.log(longestPalindrome("abccccdd")); // 7
