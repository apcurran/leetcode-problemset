"use strict";

/**
 * solution 1 -- bubble sort
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // if right num is less than curr num, swap
            if (nums[j] < nums[i]) {
                const temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
}

console.log( sortColors([2,0,2,1,1,0]) ); // [0,0,1,1,2,2]
