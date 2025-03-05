"use strict";

/**
 * solution 1 -- iterative
 * time: O(n * log n) -- sorting
 * space: O(n) -- sorting
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function transformArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (currentNum % 2 === 0) {
            // even num value
            nums[i] = 0;
        } else {
            nums[i] = 1;
        }
    }

    return nums.sort(function sortAsc(a, b) {
        return a - b;
    });
}

console.log(transformArray([4,3,2,1])); // [0,0,1,1]
console.log(transformArray([1,5,1,4,2])); // [0,0,1,1,1]
