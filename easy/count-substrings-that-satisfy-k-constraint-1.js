"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function countKConstraintSubstrings(s, k) {
    let validSubstringCount = 0;

    for (let i = 0; i < s.length; i++) {
        let substringZerosCount = 0;
        let substringOnesCount = 0;

        for (let j = i; j < s.length; j++) {
            const digit = s[j];

            if (digit === "0") {
                substringZerosCount++;
            } else {
                substringOnesCount++;
            }

            if (substringZerosCount <= k || substringOnesCount <= k) {
                validSubstringCount++;
            } else {
                break;
            }
        }
    }

    return validSubstringCount;
}

console.log(countKConstraintSubstrings("10101", 1)); // 12 (valid substrings)
