"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * A phrase is a palindrome if,
 * after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const lowerCaseStr = str
                            .slice()
                            .toLowerCase();
    const onlyAlphaNumStr = lowerCaseStr.replace(/[^a-z0-9]/g, "");
    const reversedAlphaNumStr = onlyAlphaNumStr.split("").reverse().join("");

    return onlyAlphaNumStr === reversedAlphaNumStr;
}


console.log( isPalindrome("A man, a plan, a canal: Panama") );
console.log( isPalindrome("Hello") );
