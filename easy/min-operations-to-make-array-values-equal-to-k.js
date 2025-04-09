"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    let numsGreaterThanK = new Set();

    for (let num of nums) {
        if (num < k) {
            return -1;
        } else if (num > k) {
            numsGreaterThanK.add(num);
        }
    }

    return numsGreaterThanK.size;
}

console.log(minOperations([5,2,5,4,5], 2)); // 2
console.log(minOperations([2,1,2], 2)); // -1
console.log(minOperations([9,7,5,3], 1)); // 4
