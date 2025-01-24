"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function subarraySum(nums) {
    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const startPoint = Math.max(0, i - nums[i]);
        let subarraySum = 0;

        for (let j = startPoint; j <= i; j++) {
            subarraySum += nums[j];
        }

        totalSum += subarraySum;
    }

    return totalSum;
}

console.log(subarraySum([2, 3, 1])); // 11 -> sum
