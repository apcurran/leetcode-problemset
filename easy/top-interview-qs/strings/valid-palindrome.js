"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * A phrase is a palindrome if,
//  * after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//  * it reads the same forward and backward.
//  * Alphanumeric characters include letters and numbers.
//  * @param {string} str
//  * @return {boolean}
//  */
// function isPalindrome(str) {
//     const lowerCaseStr = str
//                             .slice()
//                             .toLowerCase();
//     const onlyAlphaNumStr = lowerCaseStr.replace(/[^a-z0-9]/g, "");
//     const reversedAlphaNumStr = onlyAlphaNumStr.split("").reverse().join("");

//     return onlyAlphaNumStr === reversedAlphaNumStr;
// }

/**
 * solution 2 -- two-pointer technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    let leftPointer = 0;
    let rightPointer = str.length - 1;

    while (leftPointer < rightPointer) {
        // check that left pointer is not passing right pointer (out of bounds) AND
        // left is not alphaNumeric
        while (leftPointer < rightPointer && !isAlphaNum(str[leftPointer])) {
            leftPointer++;
        }

        // check that left pointer is not passing right pointer (out of bounds) AND
        // right is not alphaNumeric
        while (rightPointer > leftPointer && !isAlphaNum(str[rightPointer])) {
            rightPointer--;
        }

        // if both chars are not equal, it is NOT a palindrome
        if (str[leftPointer].toLowerCase() !== str[rightPointer].toLowerCase()) {
            return false;
        }

        // move pointers
        leftPointer++;
        rightPointer--;
    }

    return true;
}

/**
 * @param {string} char 
 * @returns {boolean}
 */
function isAlphaNum(char) {
    const valCharCode = char.charCodeAt(0);

    // alphaNum code ranges 48-57 (num), 65-90 (cap letter), 97-122 (lower letter)
    if (valCharCode >= 48 && valCharCode <= 57 ||
        valCharCode >= 65 && valCharCode <= 90 ||
        valCharCode >= 97 && valCharCode <= 122) {
        return true;
    }

    return false;
}


console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("race a car")); // false

