"use strict";

/**
 * solution 1 -- sort first
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums) {
    // sort nums largest to smallest
    nums.sort((a, b) => b - a);

    // two largest are the first prod pair
    const largeProd = nums[0] * nums[1];
    // two smallest are the small prod pair
    const smallProd = nums[nums.length - 1] * nums[nums.length - 2];
    
    // sub both prods for max diff
    return largeProd - smallProd;
}

console.log( maxProductDifference([5, 6, 2, 7, 4]) ); // 34
