"use strict";

/**
 * solution 1 -- Kadane's Algorithm
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxSubarraySumCircular(nums) {
    let globalMax = nums[0];
    let globalMin = nums[0];
    let currentMax = 0;
    let currentMin = 0;
    let fullSum = 0;

    for (let num of nums) {
        currentMax = Math.max(currentMax + num, num);
        currentMin = Math.min(currentMin + num, num);
        globalMax = Math.max(globalMax, currentMax);
        globalMin = Math.min(globalMin, currentMin);

        fullSum += num;
    }

    if (globalMax < 0) return globalMax;

    return Math.max(globalMax, fullSum - globalMin);
}

console.log( maxSubarraySumCircular([5,-3,5]) ); // 10
