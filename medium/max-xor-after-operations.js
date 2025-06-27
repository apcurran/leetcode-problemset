"use strict";

/**
 * solution 1 -- bitwise OR
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumXOR(nums) {
    let result = 0;

    for (let num of nums) {
        result |= num;
    }

    return result;
}

console.log(maximumXOR([3, 2, 4, 6])); // 7
