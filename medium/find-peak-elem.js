"use strict";

// /**
//  * A peak element is an element that is strictly greater than its neighbors.
//  * Given an integer array nums, find a peak element, and return its index.
//  * If the array contains multiple peaks, return the index to any of the peaks.
//  * 
//  * Time: O(n)
//  * Space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findPeakElement(nums) {
//     const n = nums.length;
//     nums[n] = -Infinity;
//     nums[-1] = nums[n];

//     for (let i = 0; i < n; i++) {
//         const currNum = nums[i];
//         const nextNum = nums[i + 1];

//         if (currNum > nextNum) {
//             return i;
//         }
//     }

//     return 0;
// }

/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given an integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 * 
 * Time: O(log n)
 * Space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middleIndex = left + ( Math.floor((right - left) / 2) );
        const middleValue = nums[middleIndex];

        if (middleIndex > 0 && middleValue < nums[middleIndex - 1]) {
            right = middleIndex - 1;
        } else if (middleIndex < nums.length - 1 && middleValue < nums[middleIndex + 1]) {
            left = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }
}

console.log( findPeakElement([1, 2, 3, 1]) ); // 2
console.log( findPeakElement([1, 2, 1, 3, 5, 6, 4]) ); // 5 (or 1)
console.log( findPeakElement([1, 2, 3]) ); // 2
