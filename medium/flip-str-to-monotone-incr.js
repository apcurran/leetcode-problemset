"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} binStr
 * @return {number} flips count
 */
function minFlipsMonoIncr(binStr) {
    let onesCount = 0;
    let flipsCount = 0;

    for (let char of binStr) {
        if (char === "1") {
            onesCount++;
        } else {
            flipsCount = Math.min(flipsCount + 1, onesCount);
        }
    }

    return flipsCount;
}

console.log(minFlipsMonoIncr("010110")); // 2
