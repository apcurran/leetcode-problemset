"use strict";

/**
 * solution 1 -- nested for loops
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countKDifference(nums, k) {
    let pairCount = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const outerNum = nums[i];
            const innerNum = nums[j];
            const absDiff = Math.abs(outerNum - innerNum);

            if (absDiff === k) pairCount++;
        }
    }

    return pairCount;
}

console.log(countKDifference([1, 2, 2, 1], 1)); // 4
