"use strict";

// /**
//  * solution 1 -- recursion
//  * time: O(k * n)
//  * space: O(k)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @param {number} multiplier
//  * @return {number[]}
//  */
// function getFinalState(nums, k, multiplier) {
//     if (k === 0) {
//         return nums;
//     }

//     const minIndex = getMinIndex(nums);
//     nums[minIndex] *= multiplier;

//     return getFinalState(nums, k - 1, multiplier);
// }

/**
 * solution 2 -- iterative
 * time: O(k * n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
function getFinalState(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        const minIndex = getMinIndex(nums);
        nums[minIndex] *= multiplier;
    }

    return nums;
}

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2)); // [8,4,6,5,6]

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function getMinIndex(nums) {
    let minValue = nums[0];
    let minIndex = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minValue) {
            // update min value and index
            minValue = nums[i];
            minIndex = i;
        }
    }

    return minIndex;
}
