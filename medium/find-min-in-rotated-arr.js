"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    return Math.min(...nums);
}

console.log( findMin([3,4,5,1,2]) ); // 1
console.log( findMin([4,5,6,7,0,1,2]) ); // 0
