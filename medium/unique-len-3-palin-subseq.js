"use strict";

// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(n^3)
//  * space: O(n) -- hashset
//  * 
//  * @param {string} s
//  * @return {number}
//  */
// function countPalindromicSubsequence(s) {
//     let uniquePalindromes = new Set();

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             for (let k = j + 1; k < s.length; k++) {
//                 // palindrome reads the same forwards and backwards,
//                 // so the first and third letters should be the same
//                 if (s[i] === s[k]) {
//                     uniquePalindromes.add(`${s[i]}${s[j]}${s[k]}`);
//                 }
//             }
//         }
//     }

//     return uniquePalindromes.size;
// }

/**
 * solution 2 -- hashset
 * time: O(n)
 * space: O(26) -> O(1)
 * 
 * @param {string} s
 * @return {number}
 */
function countPalindromicSubsequence(s) {
    const letters = new Set(s);
    let result = 0;

    for (let letter of letters) {
        let i = s.indexOf(letter);
        let j = s.lastIndexOf(letter);
        let lettersBetween = new Set();

        for (let k = i + 1; k < j; k++) {
            lettersBetween.add(s[k]);
        }

        result += lettersBetween.size;
    }

    return result;
}

console.log( countPalindromicSubsequence("aabca") ); // 3
