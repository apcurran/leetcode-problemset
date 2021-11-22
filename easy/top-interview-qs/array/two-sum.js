"use strict";

// /** Solution 1 O(n^2)
//  * Given an array of integer nums and an integer num,
//  * return indices of the two numbers such that they add up to num.
//  * You may assume that each input would have exactly one solution,
//  * and you may not use the same element twice.
//  * You can return the answer in any order.
//  * @param {number[]} nums
//  * @param {number} num
//  * @return {number[]}
//  */
// function twoSum(nums, num) {
//     for (let i = 0; i < nums.length; i++) {
//         const currOuterNum = nums[i];

//         for (let j = 0; j < nums.length; j++) {
//             // Do not use the same element twice
//             if (i === j) continue;

//             const currInnerNum = nums[j];
            
//             if (currInnerNum + currOuterNum === num) {
//                 // Return indices of nums
//                 return [i, j];
//             }
//         }
//     }
// }

// /** Solution 2 O(n)
//  * Given an array of integer nums and an integer num,
//  * return indices of the two numbers such that they add up to num.
//  * You may assume that each input would have exactly one solution,
//  * and you may not use the same element twice.
//  * You can return the answer in any order.
//  * @param {number[]} nums
//  * @param {number} num
//  * @return {number[]}
//  */
// function twoSum(nums, num) {
//     const prevValues = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         console.log(prevValues);
//         const currNum = nums[i];
//         const neededValue = num - currNum;
//         console.log("Needed value:", neededValue);
//         const index2 = prevValues.get(neededValue);

//         if (index2 !== undefined) {
//             return [i, index2];
//         }

//         prevValues.set(currNum, i);
//     }
// }

/** Solution 3 O(n)
 * Given an array of integer nums and an integer num,
 * return indices of the two numbers such that they add up to num.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} num
 * @return {number[]}
 */
function twoSum(nums, num) {
    // Sort arr
    nums.sort((a, b) => a - b);

    // Binary search
    
}

/**
 * @param {array} arr
 * @param {number} num
 * @returns {number} - index
 */
function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        // Find middle index
        const midIndex = Math.floor((start + end) / 2);
        const potentialMatch = arr[midIndex];
        // If elem is present at mid index return index
        if (potentialMatch === num) {
            return midIndex;
        } else if (potentialMatch < num) {
            // Search right
            start = midIndex + 1;
        } else {
            // Search left
            end = midIndex - 1;
        }
    }

    return -1;
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]