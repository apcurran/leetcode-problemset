"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function longestMonotonicSubarray(nums) {
//     let maxLength = 0;

//     // strictly increasing subarrs
//     for (let i = 0; i < nums.length; i++) {
//         let currentLength = 1;

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] > nums[j - 1]) {
//                 currentLength++;
//             } else {
//                 break;
//             }
//         }

//         maxLength = Math.max(maxLength, currentLength);
//     }

//     // strictly decreasing subarrs
//     for (let i = 0; i < nums.length; i++) {
//         let currentLength = 1;

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[j - 1]) {
//                 currentLength++;
//             } else {
//                 break;
//             }
//         }

//         maxLength = Math.max(maxLength, currentLength);
//     }

//     return maxLength;
// }

/**
 * solution 2 -- optimal, single loop
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function longestMonotonicSubarray(nums) {
    let maxIncreasingSubarrLength = 1;
    let maxDecrasingSubarrLength = 1;
    let overallMaxLength = 1;

    // strictly increasing subarrs
    for (let i = 0; i < nums.length - 1; i++) {
        const currentNum = nums[i];
        const nextNum = nums[i + 1];

        if (currentNum < nextNum) {
            maxIncreasingSubarrLength++;
            // reset decreasing subarr length
            maxDecrasingSubarrLength = 1;
        } else if (currentNum > nextNum) {
            maxDecrasingSubarrLength++;
            // reset increasing subarr length
            maxIncreasingSubarrLength = 1;
        } else {
            // current num is equal to next num
            // reset both
            maxIncreasingSubarrLength = 1;
            maxDecrasingSubarrLength = 1;
        }

        // check for current max
        const currentMax = Math.max(
            maxIncreasingSubarrLength,
            maxDecrasingSubarrLength,
        );
        // update global max
        overallMaxLength = Math.max(overallMaxLength, currentMax);
    }

    return overallMaxLength;
}

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])); // 2
