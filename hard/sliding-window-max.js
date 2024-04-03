"use strict";

/**
 * solution 1 -- correct, but TLE (brute force)
 * time: O(n * k)
 * space: O(n + k)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    let maxValues = [];

    // iterate nums by 1 each time
    for (let i = 0; i <= nums.length - k; i++) {
        // check current window of length k
        const chunk = nums.slice(i, i + k);
        const chunkMax = getMax(chunk);
        maxValues.push(chunkMax);
    }

    return maxValues;
}


/**
 * @param {number[]} nums 
 */
function getMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    return max;
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
