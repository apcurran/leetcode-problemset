"use strict";

/**
 * solution 1 -- unoptimized
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let resArr = [-1, -1];

    if (!nums.includes(target)) return resArr;

    // left index
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];

        if (currNum === target) {
            resArr[0] = i;
            break;
        }
    }

    // right index
    for (let i = nums.length - 1; i >= 0; i--) {
        const currNum = nums[i];

        if (currNum === target) {
            resArr[1] = i;
            break;
        }
    }

    return resArr;
}

console.log( searchRange([5,7,7,8,8,10], 8) ); // [3, 4]
