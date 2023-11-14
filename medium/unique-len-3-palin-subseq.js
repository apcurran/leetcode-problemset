"use strict";

/**
 * solution 1 -- hashset
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
