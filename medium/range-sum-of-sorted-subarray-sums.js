"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^2 * log n)
 * space: O(n^2)
 * 
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeSum(nums, n, left, right) {
    // build subarray sum list
    const MOD_AMOUNT = (10 ** 9) + 7;
    let subarraySums = [];

    for (let i = 0; i < n; i++) {
        let currentSubarraySum = 0;

        for (let j = i; j < n; j++) {
            const num = nums[j];
            currentSubarraySum += num;
            subarraySums.push(currentSubarraySum);
        }
    }

    subarraySums.sort(function sortAsc(subarraySumA, subarraySumB) {
        return subarraySumA - subarraySumB;
    });

    let sumFromLeftToRight = 0;

    for (let i = left - 1; i < right; i++) {
        sumFromLeftToRight += subarraySums[i];
    }

    return sumFromLeftToRight % MOD_AMOUNT;
}

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5)); // 13
