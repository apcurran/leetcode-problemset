"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function returnToBoundaryCount(nums) {
    let steps = nums[0];
    let boundaryHitsCount = 0;

    for (let i = 1; i < nums.length; i++) {
        steps += nums[i];

        if (steps === 0) boundaryHitsCount++;
    }

    return boundaryHitsCount;
}

console.log(returnToBoundaryCount([2, 3, -5])); // 1
console.log(returnToBoundaryCount([3, 2, -3, -4])); // 0
