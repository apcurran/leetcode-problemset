"use strict";

// /**
//  * solution 1 -- brute force, TLE
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} lowerLimit
//  * @param {number} upperLimit
//  * @return {number}
//  */
// function countFairPairs(nums, lowerLimit, upperLimit) {
//     let fairPairCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const sum = nums[i] + nums[j];

//             if (sum >= lowerLimit && sum <= upperLimit) {
//                 fairPairCount++;
//             }
//         }
//     }

//     return fairPairCount;
// }

/**
 * solution 2 -- sort & binary search
 * time: O(n * log n)
 * space: O(n) -- sort method built-in space
 * 
 * @param {number[]} nums
 * @param {number} lowerLimit
 * @param {number} upperLimit
 * @return {number}
 */
function countFairPairs(nums, lowerLimit, upperLimit) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });
    let fairPairCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const low = lowerLimit - nums[i];
        const up = upperLimit - nums[i];
        const diff = binarySearch(nums, i + 1, nums.length - 1, up + 1) -
                     binarySearch(nums, i + 1, nums.length - 1, low);
        fairPairCount += diff;
    }

    return fairPairCount;
}

/**
 * @param {number[]} nums 
 * @param {number} left 
 * @param {number} right 
 * @param {number} target
 * @returns {number}
 */
function binarySearch(nums, left, right, target) {
    while (left <= right) {
        const midIndex = left + Math.floor((right - left) / 2);
        const midValue = nums[midIndex];

        if (midValue >= target) {
            // make smaller, check left half
            right = midIndex - 1;
        } else {
            // make bigger, check right half
            left = midIndex + 1;
        }
    }

    return right;
}

console.log(countFairPairs([0,1,7,4,4,5], 3, 6)); // 6
console.log(countFairPairs([1,7,9,2,5], 11, 11)); // 1
