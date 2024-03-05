"use strict";

/**
 * solution 1 -- two pointer
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function minimumLength(str) {
    let left = 0;
    let right = str.length - 1;

    // as long as pointers have not crossed each other and
    // the prefix and suffix chars are the same
    while (left < right && str[left] === str[right]) {
        const tempChar = str[left];
        // move left pointer as far as possible
        while (left <= right && str[left] === tempChar) {
            left++;
        }

        while (left <= right && str[right] === tempChar) {
            right--;
        }
    }

    return right - left + 1;
}

console.log(minimumLength("cabaabac")); // 0
console.log(minimumLength("aabccabba")); // 3
