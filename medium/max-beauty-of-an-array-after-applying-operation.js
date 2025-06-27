"use strict";

// /**
//  * solution 1 -- sliding window
//  * time: O(n * log n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function maximumBeauty(nums, k) {
//     // try to make longest subseq (do not have to be contiguous) of same ints
//     nums.sort(function sortAsc(a, b) {
//         return a - b;
//     });
//     let right = 0;
//     let maxBeauty = 0;

//     for (let left = 0; left < nums.length; left++) {
//         // while right pointer has not passed the nums array boundary AND
//         // window size is less than or equal to twice k
//         while (right < nums.length && (nums[right] - nums[left] <= 2 * k)) {
//             right++;
//         }

//         maxBeauty = Math.max(maxBeauty, right - left);
//     }

//     return maxBeauty;
// }

/**
 * solution 2 -- sliding window (optimized)
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximumBeauty(nums, k) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] - nums[left] > k * 2) {
            left++;
        }

        right++;
    }

    return right - left; // window size
}

console.log(maximumBeauty([4, 6, 1, 2], 2)); // 3
console.log(maximumBeauty([1, 1, 1, 1], 10)); // 4

