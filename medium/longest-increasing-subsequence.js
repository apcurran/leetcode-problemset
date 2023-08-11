"use strict";

/**
 * solution 1 -- DP bottom-up
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    let longestSubsequence = new Array(nums.length).fill(1);

    for (let i = nums.length; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                // we know nums[j] is in increasing order
                longestSubsequence[i] = Math.max(longestSubsequence[i], 1 + longestSubsequence[j]);
            }
        }
    }

    return getMax(longestSubsequence);
}

/**
 * @param {number[]} arr 
 * @return {number}
 */
function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    return max;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4 -> [2, 3, 7, 101]
