"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxAdjacentDistance(nums) {
    // take care of circular array case first
    let maxAbsoluteDiff = Math.abs(nums.at(-1) - nums[0]);

    // skip last case (already handled above first)
    for (let i = 0; i < nums.length - 1; i++) {
        maxAbsoluteDiff = Math.max(
            maxAbsoluteDiff,
            Math.abs(nums[i] - nums[i + 1]),
        );
    }

    return maxAbsoluteDiff;
}

console.log(maxAdjacentDistance([-5, -10, -5])); // 5
