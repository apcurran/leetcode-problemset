"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minimumDifference(nums, k) {
    nums.sort((a, b) => a - b);

    let leftPointer = 0;
    let rightPointer = k - 1;
    let minDiff = Infinity;

    while (rightPointer < nums.length) {
        const currDiff = nums[rightPointer] - nums[leftPointer];
        minDiff = Math.min(minDiff, currDiff);

        // move pointers
        leftPointer++;
        rightPointer++;
    }

    return minDiff;
}

console.log( minimumDifference([90], 1) ); // 0
console.log( minimumDifference([9, 4, 1, 7], 2) ); // 2
