"use strict";

/**
 * solution 1 -- Set cache
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @return {number} count of "good" strings without repeated chars
 */
function countGoodSubstrings(str) {
    let goodStrsCount = 0;

    for (let i = 0; i < str.length - 2; i++) {
        const chunk = str.slice(i, i + 3);
        const chunkUniqueChars = new Set(chunk);

        if (chunkUniqueChars.size === 3) {
            goodStrsCount++;
        }
    }

    return goodStrsCount;
}

console.log(countGoodSubstrings("xyzzaz"));
