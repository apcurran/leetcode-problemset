"use strict";

/**
 * solution 1 -- sorting
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minIncrementForUnique(nums) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });

    let incrementCount = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            // update counter
            incrementCount += (1 + nums[i - 1] - nums[i]);
            // update current num
            nums[i] = nums[i - 1] + 1;
        }
    }

    return incrementCount;
}

console.log(minIncrementForUnique([1, 2, 2])); // 1
