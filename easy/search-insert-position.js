"use strict";

/**
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * 
 * Solution 1
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    // Iterate over nums arr
    for (let i = 0; i < nums.length; i++) {
        const currVal = nums[i];
        const nextVal = nums[i + 1];

        if (currVal > target) return i;

        // Check if curr val == target val
        // If yes, return the index of curr val
        if (target === currVal) return i;
        
        // If no, check if curr val is less than target and next val is greater than target
        if (target > currVal && target < nextVal) {
            //      If yes, then return next index
            return i + 1;
        }

        // If end of arr, return next index
        if (i === nums.length - 1) return i + 1;
    }
}

console.log( searchInsert( [1, 3, 5, 6], 5) );  // 2
console.log( searchInsert( [1, 3, 5, 6], 2) );  // 1
console.log( searchInsert( [1, 3, 5, 6], 7) );  // 4
