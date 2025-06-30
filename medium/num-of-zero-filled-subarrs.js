"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function zeroFilledSubarray(nums) {
    let currentConsecutiveZerosCount = 0;
    let totalZeroSubarrsCount = 0;

    for (let num of nums) {
        if (num === 0) {
            currentConsecutiveZerosCount++;
            totalZeroSubarrsCount += currentConsecutiveZerosCount;
        } else {
            // reset counter
            currentConsecutiveZerosCount = 0;
        }
    }

    return totalZeroSubarrsCount;
}

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])); // 6
