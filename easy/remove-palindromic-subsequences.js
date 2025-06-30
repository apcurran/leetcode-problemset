"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
    // if the string is a palindrome, we can solve in 1 step
    if (isPalindrome(s)) {
        return 1;
    } else {
        return 2;
    }
}

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        const leftChar = str[left];
        const rightChar = str[right];

        if (leftChar !== rightChar) return false;

        left++;
        right--;
    }

    return true;
}

console.log(removePalindromeSub("ababa")); // 1
console.log(removePalindromeSub("baabb")); // 2
