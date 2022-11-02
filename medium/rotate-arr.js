"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number[]}
 */
function rotate(nums, k) {
    // mod k to avoid unnecessary k steps
    k = k % nums.length;

    // reverse entire arr from start to end
    reverseArr(nums, 0, nums.length - 1);
    // reverse arr from start to k (0-indexed) portion
    reverseArr(nums, 0, k - 1);
    // reverse arr from k to end portion
    reverseArr(nums, k, nums.length - 1);

    return nums;
}

/**
 * @param {number[]} nums 
 * @param {number} start 
 * @param {number} end 
 */
function reverseArr(nums, start, end) {
    while (start < end) {
        // swap start and end vals
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// /**
//  * solution 2 -- correct, but TLE
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums 
//  * @param {number} k 
//  * @returns {number[]}
//  */
// function rotate(nums, k) {
//     k = k % nums.length;

//     for (let i = 0; i < k; i++) {
//         const removedNum = nums.pop();
//         // move to the front of arr
//         nums.unshift(removedNum);
//     }

//     return nums;
// }

console.log( rotate([1,2,3,4,5,6,7], 3) ); // [5, 6, 7, 1, 2, 3, 4]
