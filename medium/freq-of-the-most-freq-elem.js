"use strict";

/**
 * solution 1 -- sort and sliding window combo
 * time: O(n * log n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxFrequency(nums, k) {
    // sort ASC
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = 0;
    let res = 0;
    let total = 0;

    while (right < nums.length) {
        total += nums[right];

        // while invalid, shrink the window
        while (nums[right] * (right - left + 1) > total + k) {
            total -= nums[left];
            left++;
        }

        res = Math.max(res, right - left + 1);
        right++;
    }

    return res;
}

console.log(maxFrequency([1, 2, 4], 5)); // 3
