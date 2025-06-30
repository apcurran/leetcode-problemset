"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
function getMinDistance(nums, target, start) {
    let minOverallDistance = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const currentDistance = Math.abs(i - start);

        if (currentNum === target && currentDistance < minOverallDistance) {
            minOverallDistance = currentDistance;
        }
    }

    return minOverallDistance;
}

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3)); // 1
