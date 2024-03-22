"use strict";

/**
 * solution 1 -- two pointers
 * n = bases from 2 to n - 2
 * m = base i of n number
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number} n
 * @return {boolean}
 */
function isStrictlyPalindromic(n) {
    const startingBase = 2;
    const endingBase = n - 2;

    for (let i = startingBase; i <= endingBase; i++) {
        const baseNum = n.toString(i);
        // test if base i is a palindrome
        if (!isPalindrome(baseNum)) {
            return false;
        }
    }

    // if this is reached, it is a palindrome
    return true;
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
}

console.log(isStrictlyPalindromic(9)); // false
console.log(isStrictlyPalindromic(4)); // false
