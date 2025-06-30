"use strict";

// /**
//  * solution 1 -- brute force (correct, but TLE)
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxWidthRamp(nums) {
//     let maxWidth = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             // check for nums[i] <= nums[j]
//             if (nums[i] > nums[j]) continue;
//             // if so, re-evaluate max width
//             const currentWidth = j - i;
//             maxWidth = Math.max(maxWidth, currentWidth);
//         }
//     }

//     return maxWidth;
// }

/**
 * solution 2 -- sliding window
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxWidthRamp(nums) {
    let maxRight = new Array(nums.length);
    let n = nums.length;
    maxRight[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], nums[i]);
    }

    let result = 0;
    let left = 0;
    let right = 0;

    while (right < n) {
        while (left < right && nums[left] > maxRight[right]) {
            left++;
        }

        result = Math.max(result, right - left);
        right++;
    }

    return result;
}

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5])); // 4
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])); // 7
