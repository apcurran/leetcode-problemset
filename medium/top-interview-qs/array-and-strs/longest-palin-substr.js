"use strict";

// /**
//  * solution 1 -- correct, but TLE
//  * m = subStr len
//  * time: O(n^3)
//  * space: O(n + m)
//  * 
//  * @param {string} s
//  * @return {string}
//  */
// function longestPalindrome(s) {
//     let maxPalinStr = "";

//     for (let i = 0; i < s.length; i++) {
//         let subStr = "";

//         for (let j = i; j < s.length; j++) {
//             const subStrChar = s[j];
//             subStr += subStrChar;

//             if (isPalindrome(subStr)) {
//                 // check if longer than max to replace
//                 if (subStr.length > maxPalinStr.length) {
//                     maxPalinStr = subStr;
//                 }
//             }
//         }
//     }

//     return maxPalinStr;
// }

// /**
//  * solution 1 -- two-pointer approach
//  * 
//  * @param {string} str 
//  * @returns {boolean}
//  */
// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) return false;

//         left++;
//         right--;
//     }

//     return true;
// }

/**
 * solution 2
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        const oddLeft = i;
        const oddRight = i;
        isPalin(oddLeft, oddRight);

        const evenLeft = i;
        const evenRight = i + 1;
        isPalin(evenLeft, evenRight);
    }

    return longest;

    /**
     * @param {number} left 
     * @param {number} right 
     * @returns {void}
     */
    function isPalin(left, right) {
        // check from center -> outwards
        // while left and right are in-bounds and equal to each other (a palindrome)
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLen = right - left + 1;

            if (currentLen > longest.length) {
                longest = s.slice(left, right + 1); // inclusive copy
            }
            // move pointers
            left--;
            right++;
        }
    }
}


console.log(longestPalindrome("babad")); // "bab"
