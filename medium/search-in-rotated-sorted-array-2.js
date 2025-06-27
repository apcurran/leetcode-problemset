"use strict";

/**
 * solution 1 -- brute force
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
    return nums.includes(target);
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false
