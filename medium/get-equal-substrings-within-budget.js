"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function equalSubstring(s, t, maxCost) {
    let currentCost = 0;
    let left = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        // add right characters from s and t
        currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (currentCost > maxCost) {
            // remove left characters from s and t
            currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        const currentWindowSize = right - left + 1;
        result = Math.max(result, currentWindowSize);
    }

    return result;
}

console.log(equalSubstring("abcd", "bcdf", 3)); // 3
