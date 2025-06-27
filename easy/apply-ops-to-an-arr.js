"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function applyOperations(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            // multiply nums[i] by 2
            nums[i] *= 2;
            // set nums[i + 1] = 0
            nums[i + 1] = 0;
        }
    }

    // shift all 0s to end of arr
    let nonZeros = [];
    let zeros = [];

    for (let num of nums) {
        if (num === 0) {
            zeros.push(num);
        } else {
            nonZeros.push(num);
        }
    }

    return [...nonZeros, ...zeros];
}

console.log(applyOperations([1, 2, 2, 1, 1, 0])); // [1,4,2,0,0,0]
