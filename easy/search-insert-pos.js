"use strict";

/**
 * solution 1 -- bin search
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    // binary search
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // get midpoint
        const mid = Math.floor(left + (right - left) / 2);
        const val = nums[mid];

        if (target === val) return mid;

        if (target > val) {
            // search right half
            left = mid + 1;
        } else {
            // search left half
            right = mid - 1;
        }
    }

    return left;
}

console.log( searchInsert([1, 3, 5, 6], 5) ); // 2
console.log( searchInsert([1, 3, 5, 6], 2) ); // 1
console.log( searchInsert([1, 3, 5, 6], 7) ); // 4
