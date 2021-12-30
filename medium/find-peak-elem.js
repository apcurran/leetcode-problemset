"use strict";


/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given an integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
    const n = nums.length;
    nums[n] = -Infinity;
    nums[-1] = nums[n];

    for (let i = 0; i < n; i++) {
        const currNum = nums[i];
        const nextNum = nums[i + 1];

        if (currNum > nextNum) {
            return i;
        }
    }

    return 0;
}

console.log( findPeakElement([1, 2, 3, 1]) ); // 2
console.log( findPeakElement([1, 2, 1, 3, 5, 6, 4]) ); // 5 or 1
console.log( findPeakElement([1, 2, 3]) ); // 2
