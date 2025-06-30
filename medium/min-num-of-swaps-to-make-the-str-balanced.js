"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function minSwaps(s) {
    let currentExtraClosingBracketsCount = 0;
    let maxExtraClosingBracketsCount = 0;

    for (let bracket of s) {
        if (bracket === "[") {
            currentExtraClosingBracketsCount--;
        } else {
            currentExtraClosingBracketsCount++;
        }

        // always set max extras to current max
        maxExtraClosingBracketsCount = Math.max(
            maxExtraClosingBracketsCount,
            currentExtraClosingBracketsCount,
        );
    }

    return Math.floor((maxExtraClosingBracketsCount + 1) / 2);
}

console.log(minSwaps("][][")); // 1
console.log(minSwaps("]]][[[")); // 2
