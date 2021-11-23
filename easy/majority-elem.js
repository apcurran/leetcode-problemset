"use strict";

/**
 * O(n) time
 * O(n) space
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    const n = nums.length;
    let numCache = new Map();

    for (let num of nums) {
        const expectedCount = numCache.get(num) + 1 || 1;
        numCache.set(num, expectedCount);
    }

    for (let [key, val] of numCache) {
        if (val > n / 2) {
            return key;
        }
    }
}

console.log( majorityElement([3, 2, 3]) ); // 3
console.log( majorityElement([2,2,1,1,1,2,2]) ); // 2