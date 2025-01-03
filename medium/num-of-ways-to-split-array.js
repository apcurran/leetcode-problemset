"use strict";

/**
 * solution 1 -- brute force (TLE)
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplitArray(nums) {
    let counter = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const prefixSum = nums.slice(0, i + 1).reduce((sum, curr) => sum + curr, 0);
        const suffixSum = nums.slice(i + 1).reduce((sum, curr) => sum + curr, 0);

        if (prefixSum >= suffixSum) counter++;
    }

    return counter;
}

console.log(waysToSplitArray([10,4,-8,7])); // 2
