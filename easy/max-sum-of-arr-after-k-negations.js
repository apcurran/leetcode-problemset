"use strict";

/**
 * solution 1
 * time: O(n * log n + k)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function largestSumAfterKNegations(nums, k) {
    nums.sort((a, b) => a - b);
    // keep track of lowest positive num index
    let lowestPositiveIndex = 0;

    for (let i = 0; i < k; i++) {
        const currentNum = nums[i];

        if (currentNum < nums[lowestPositiveIndex]) {
            // found a smaller positive num
            lowestPositiveIndex = i;
        }

        if (currentNum < 0) {
            // flip largest negative num first,
            nums[i] = -currentNum;
        } else {
            // keep flipping smallest positive num (to least affect sum after all negations)
            nums[lowestPositiveIndex] = -nums[lowestPositiveIndex];
        }
    }

    return nums.reduce((sum, currentNum) => sum + currentNum, 0);
}

console.log(largestSumAfterKNegations([4, 2, 3], 1)); // 5
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); // 6
