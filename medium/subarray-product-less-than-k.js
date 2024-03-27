"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function numSubarrayProductLessThanK(nums, k) {
//     let validSubarraysCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let product = 1;

//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] * product >= k) break;

//             product *= nums[j];
//             validSubarraysCount++;
//         }
//     }

//     return validSubarraysCount;
// }

/**
 * solution 2 -- two pointers
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
    // no possible contiguous subarrays edge case
    if (k <= 1) return 0;

    let validSubarraysCount = 0;
    let currentProduct = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentProduct *= nums[right];

        while (left <= right && currentProduct >= k) {
            // shrink window
            currentProduct /= nums[left];
            left++;
        }

        // add window size to result
        const windowSize = right - left + 1;
        validSubarraysCount += windowSize;
    }

    return validSubarraysCount;
}

console.log(numSubarrayProductLessThanK([10,5,2,6], 100)); // 8
