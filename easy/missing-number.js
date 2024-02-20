"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2) -- array.includes() within loop
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) return i;
    }

    return -1;
}

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
