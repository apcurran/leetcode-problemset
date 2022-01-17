"use strict";

/**
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * 
 * n = nums.length
 * m = count for each num within nums arr
 * 
 * Solution 1
 * Time: O(n*m)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {void} Modify nums in-place
 */
function sortColors(nums) {
    let colorsMap = new Map([
        [0, 0],
        [1, 0],
        [2, 0]
    ]);

    for (let num of nums) {
        const prevColorCount = colorsMap.get(num);
        colorsMap.set(num, prevColorCount + 1);
    }

    let resArr = [];

    for (let [num, count] of colorsMap) {
        for (let i = 0; i < count; i++) {
            resArr.push(num);
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = resArr[i];
    }
}

console.log( sortColors([2, 0, 2, 1, 1, 0]) ); // [0, 0, 1, 1, 2, 2]
