"use strict";

// /**
//  * solution 1 -- unoptimized
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// function searchRange(nums, target) {
//     let resArr = [-1, -1];

//     for (let i = 0; i < nums.length; i++) {
//         const currNum = nums[i];

//         // left index
//         if (currNum === target && resArr[0] === -1) {
//             resArr[0] = i;
//         }

//         // right index
//         if (currNum === target && resArr[0] !== -1) {
//             resArr[1] = i;
//         }
//     }

//     return resArr;
// }

/**
 * solution 1 -- unoptimized
 * time: O(log n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    const leftIndex = binSearch(nums, target, true);
    const rightIndex = binSearch(nums, target, false);

    return [leftIndex, rightIndex];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {boolean} leftBias
 * @returns {number}
 */
function binSearch(nums, target, leftBias) {
    let left = 0;
    let right = nums.length - 1;
    let targetIndex = -1;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        const middleValue = nums[middle];

        if (target > middleValue) {
            left = middle + 1;
        } else if (target < middleValue) {
            right = middle - 1;
        } else {
            // target found
            targetIndex = middle;

            // repeat bin search for left index
            if (leftBias) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    return targetIndex;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
