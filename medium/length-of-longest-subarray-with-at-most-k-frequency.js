"use strict";

/**
 * solution 1 -- hashmap and sliding window
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxSubarrayLength(nums, k) {
    let numsFrequencies = new Map();
    let left = 0;
    let longestSubarrayLength = 0;

    for (let right = 0; right < nums.length; right++) {
        const currentNum = nums[right];
        const previousNumFrequency = numsFrequencies.get(currentNum) || 0;
        // update frequency
        numsFrequencies.set(currentNum, previousNumFrequency + 1);

        // make sure current num frequency did not exceed k
        while (numsFrequencies.get(currentNum) > k) {
            // decrement frequency
            const leftNum = nums[left];
            const numFreq = numsFrequencies.get(leftNum);
            numsFrequencies.set(leftNum, numFreq - 1);
            // move left pointer
            left++;
        }

        // possible max update
        const windowLength = right - left + 1;
        longestSubarrayLength = Math.max(longestSubarrayLength, windowLength);
    }

    return longestSubarrayLength;
}

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)); // 6
console.log(maxSubarrayLength([1, 2, 2, 2], 1)); // 2
