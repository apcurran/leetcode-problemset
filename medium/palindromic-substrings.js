"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
    let totalPalindromes = 0;

    for (let i = 0; i < s.length; i++) {
        // get odd-length palindromes
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            totalPalindromes++;
            left--;
            right++;
        }

        // get even-length palindromes
        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            totalPalindromes++;
            left--;
            right++;
        }
    }

    return totalPalindromes;
}

console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6
