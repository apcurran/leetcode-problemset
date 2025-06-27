"use strict";

/**
 * solution 1 -- greedy
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {
    let prefixMax = nums[0];
    let maxDiff = 0;
    let result = 0;

    for (let k = 1; k < nums.length; k++) {
        result = Math.max(result, maxDiff * nums[k]);
        maxDiff = Math.max(maxDiff, prefixMax - nums[k]);
        prefixMax = Math.max(prefixMax, nums[k]);
    }
    
    return result;
}

console.log(maximumTripletValue([12, 6, 1, 2, 7])); // 77
