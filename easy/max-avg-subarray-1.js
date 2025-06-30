"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n * k)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function findMaxAverage(nums, k) {
//     if (nums.length === 1) return nums[0];

//     let maxAverage = -Infinity;

//     for (let i = 0; i <= nums.length - k; i++) {
//         let currentSum = 0;
//         let j = 0;

//         while (j < k) {
//             const currentNum = nums[i + j];
//             currentSum += currentNum;
//             j++;
//         }

//         const currentAvg = currentSum / k;
//         maxAverage = Math.max(maxAverage, currentAvg);
//     }

//     return maxAverage;
// }

/**
 * solution 2 -- sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let maxSum = currentSum;

    for (let i = k; i < nums.length; i++) {
        const amt = nums[i] - nums[i - k];
        currentSum += amt;
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([-1], 1)); // -1
