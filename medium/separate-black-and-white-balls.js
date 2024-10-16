"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s
 * @return {number}
 */
function minimumSteps(s) {
    let left = 0;
    let swapCount = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            const diff = right - left;
            swapCount += diff;
            // move left pointer
            left++;
        }
    }

    return swapCount;
}

console.log(minimumSteps("100")); // 2
