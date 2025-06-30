"use strict";

// /**
//  * Given an integer array nums,
//  * move all the even integers at the beginning of the array followed by all the odd integers.
//  *
//  * solution 1
//  * time: O(n log n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortArrayByParity(nums) {
//     return [...nums].sort(compareNums);
// }

// function compareNums(a, b) {
//     // If num is even, place at the front of arr
//     if (a % 2 === 0 && b % 2 !== 0) {
//         return -1;
//     }

//     return 1;
// }

// /**
//  * solution 2
//  * time: O(n log n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortArrayByParity(nums) {
//     return nums.sort(compareNums);
// }

// /**
//  * @param {number} a
//  * @returns {-1|1}
//  */
// function compareNums(a) {
//     // If num is even, place at the front of arr
//     if (a % 2 === 0) {
//         return -1;
//     } else {
//         return 1;
//     }
// }

/**
 * solution 3
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        const currentRightNum = nums[right];

        if (currentRightNum % 2 === 0) {
            nums[right] = nums[left];
            nums[left] = currentRightNum;
            left++;
        }
    }

    return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4])); // [2, 4, 3, 1]
