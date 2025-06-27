"use strict";

/**
 * solution 1 - str sort
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
    if (nums === null || nums.length === 0) return "0";

    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

    if (nums[0] === 0) return "0";

    return nums.join("");
}

console.log( largestNumber([3, 30, 34, 5, 9]) ); // "9534330"
