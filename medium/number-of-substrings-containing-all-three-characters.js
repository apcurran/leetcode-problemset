"use strict";

/**
 * solution 1 -- brute force (correct, but TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let aCount = 0;
        let bCount = 0;
        let cCount = 0;

        for (let j = i; j < s.length; j++) {
            const currentChar = s[j];

            if (currentChar === "a") {
                aCount++;
            } else if (currentChar === "b") {
                bCount++;
            } else {
                cCount++;
            }

            // at least 1 of each "a", "b", and "c"?
            // add to results counter
            if (aCount !== 0 && bCount !== 0 && cCount !== 0) {
                result++;
            }
        }
    }

    return result;
}

console.log(numberOfSubstrings("abcabc")); // 10
