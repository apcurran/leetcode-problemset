"use strict";

// /**
//  * solution 1 -- sliding window with hashset
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maximumUniqueSubarray(nums) {
//     let seenValues = new Set();
//     let maxSum = 0;
//     let currentSum = 0;
//     let left = 0;

//     for (let right = 0; right < nums.length; right++) {
//         while (seenValues.has(nums[right])) {
//             // shrink window
//             seenValues.delete(nums[left]);
//             currentSum -= nums[left];
//             left++;
//         }

//         // expand window
//         seenValues.add(nums[right]);
//         currentSum += nums[right];
//         // possible max update
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }

/**
 * solution 2 -- sliding window with typed array (slight optimization)
 * time: O(n)
 * space: O(1) -- fixed array size
 *
 * @param {number[]} nums
 * @return {number}
 */
function maximumUniqueSubarray(nums) {
    let seenValues = new Uint8Array(10_001); // max possible by constraint
    let maxSum = 0;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];

        while (seenValues[num]) {
            seenValues[nums[left]] = 0;
            currentSum -= nums[left];
            left++;
        }

        seenValues[num] = 1;
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // 8
