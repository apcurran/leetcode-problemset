"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {string}
 */
function reverseVowels(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let left = 0;
    let right = str.length - 1;
    let result = [...str];

    while (left < right) {
        while (left < right && !vowels.includes(str[left])) {
            left++;
        }

        while (left < right && !vowels.includes(str[right])) {
            right--;
        }

        const leftChar = str[left];
        const rightChar = str[right];
        // reverse these vowels at their prospective indices
        result[left] = rightChar;
        result[right] = leftChar;
        // move pointers
        left++;
        right--;
    }

    return result.join("");
}

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"
