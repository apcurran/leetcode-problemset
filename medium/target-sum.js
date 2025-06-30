"use strict";

/**
 * solution 1 -- recursion (brute force)
 * time: O(2^n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
    /**
     * @param {number} i
     * @param {number} currSum
     * @returns {number}
     */
    function waysToTarget(i, currSum) {
        // reached the end
        if (i === nums.length) {
            if (currSum === target) {
                return 1;
            } else {
                return 0;
            }
        }

        // otherwise recursive case
        return (
            waysToTarget(i + 1, currSum + nums[i]) +
            waysToTarget(i + 1, currSum - nums[i])
        );
    }

    return waysToTarget(0, 0);
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
