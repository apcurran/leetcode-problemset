"use strict";

/**
 * solution 1 -- hashset for unique nums
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
    const uniqueNums = new Set(nums);
    const maxNum = getMax(nums);
    let sum = 0;

    // if the maximum element in the array is less than zero,
    // the answer is the maximum element.
    if (maxNum < 0) return maxNum;

    for (let num of uniqueNums) {
        if (num < 0) continue;

        sum += num;
    }

    return sum;
}

console.log(maxSum([1, 1, 0, 1, 1])); // 1
console.log(maxSum([1, 2, -1, -2, 1, 0, -1])); // 3

/**
 * @param {number[]} nums
 * @returns {number}
 */
function getMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    return max;
}
