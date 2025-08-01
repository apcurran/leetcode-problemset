"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function reductionOperations(nums) {
    // sort ASC
    nums.sort((a, b) => a - b);
    let upSteps = 0;
    let totalReductions = 0;

    // start at i = 1,
    // since the 0th elem is already at the minimum
    for (let i = 1; i < nums.length; i++) {
        // compare current with previous value
        if (nums[i] !== nums[i - 1]) {
            upSteps++;
        }

        totalReductions += upSteps;
    }

    return totalReductions;
}

// console.log(reductionOperations([5,1,3])); // 3
console.log(reductionOperations([1, 1, 2, 2, 3])); // 4
