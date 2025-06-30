"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n^2)
 * space: O(1)
 *
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
    for (let word of words) {
        if (isPalindrome(word)) return word;
    }

    return "";
}

/**
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
    let leftPointer = 0;
    let rightPointer = word.length - 1;

    while (leftPointer <= rightPointer) {
        const leftChar = word[leftPointer];
        const rightChar = word[rightPointer];

        if (leftChar !== rightChar) return false;

        // move left pointer right
        leftPointer++;
        // move right pointer left
        rightPointer--;
    }

    return true;
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // "ada"
console.log(firstPalindrome(["notapalindrome", "racecar"])); // "racecar"
console.log(firstPalindrome(["def", "ghi"])); // ""
