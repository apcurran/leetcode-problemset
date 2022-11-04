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

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        
        // left index
        if (currNum === target && resArr[0] === -1) {
            resArr[0] = i;
        }

        // right index
        if (currNum === target && resArr[0] !== -1) {
            resArr[1] = i;
        }
    }

    return resArr;
}

// /**
//  * solution 2 -- binary search
//  * time: O(log n)
//  * space: O(1)
//  * 
//  * @param {number[]} nums arr sorted in non-decreasing order
//  * @param {number} target
//  * @return {number[]}
//  */
// function searchRange(nums, target) {
//     let resArr = [-1, -1];



//     return resArr;
// }

console.log( searchRange([5,7,7,8,8,10], 8) ); // [3, 4]
