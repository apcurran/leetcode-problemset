"use strict";

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let prevIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Destructuring swap
            [nums[prevIndex], nums[i]] = [nums[i], nums[prevIndex]];

            prevIndex++;
        }
    }
}

console.log( moveZeroes([0, 1, 0, 3, 12]) ); // [1, 3, 12, 0, 0]
