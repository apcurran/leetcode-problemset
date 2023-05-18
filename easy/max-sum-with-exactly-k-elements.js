"use strict";

/**
 * solution 1
 * n = nums length
 * time: O(n * log n + k)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
    // asc order
    nums = nums.sort((a, b) => a - b);
    let maxScore = 0;

    // iterate k times
    for (let i = 0; i < k; i++) {
        // get largest elem -- m
        const largestElem = nums[nums.length - 1];
        maxScore += largestElem;
        // add largest elem + 1 to replace m
        const updatedLargestElem = largestElem + 1;
        nums[nums.length - 1] = updatedLargestElem;
    }

    return maxScore;
}

console.log( maximizeSum([1,2,3,4,5], 3) ); // 18
console.log( maximizeSum([5,5,5], 2) ); // 11
