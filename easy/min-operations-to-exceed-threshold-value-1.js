"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    let thresholdNumsCount = 0;

    for (let num of nums) {
        if (num >= k) thresholdNumsCount++;
    }

    return nums.length - thresholdNumsCount;
}

console.log(minOperations([2,11,10,1,3], 10)); // 3
console.log(minOperations([1,1,2,4,9], 1)); // 0
console.log(minOperations([1,1,2,4,9], 9)); // 4
