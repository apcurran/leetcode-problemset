"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n + k)
 * space: O(1)
 *
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
function numberOfAlternatingGroups(colors, k) {
    const n = colors.length;
    let left = 0;
    let result = 0;

    // add k to deal with circular nature of array
    for (let right = 1; right < n + k - 1; right++) {
        // check alternating status
        if (colors[right % n] === colors[(right - 1) % n]) {
            left = right;
        }

        if (right - left + 1 > k) {
            left++;
        }

        if (right - left + 1 === k) {
            result++;
        }
    }

    return result;
}

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3)); // 3
