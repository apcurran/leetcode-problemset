"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
    let endPointer = 0;
    let beginningPointer = 0;

    while (endPointer < nums.length) {
        if (nums[endPointer] === 0) k--;

        // move sliding window forward to check remaining nums
        if (k < 0) {
            if (nums[beginningPointer] === 0) k++;

            beginningPointer++;
        }

        endPointer++;
    }

    return endPointer - beginningPointer;
}

console.log( longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2) ); // 6
console.log( longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3) ); // 10
