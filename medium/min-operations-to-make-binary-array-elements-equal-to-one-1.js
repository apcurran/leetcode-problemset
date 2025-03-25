"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
    /**
     * mutate array in-place
     * 
     * @param {number[]} nums 
     * @param {number} i 
     * @returns {void}
     */
    function flipBit(nums, i) {
        nums[i] === 0 ? nums[i] = 1 : nums[i] = 0;
    }
    
    let result = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        // skip 1 bits, only looking to flip 0s
        if (nums[i] === 1) {
            continue;
        }

        // flip next 3 consecutive bits
        flipBit(nums, i);
        flipBit(nums, i + 1);
        flipBit(nums, i + 2);

        result++;
    }

    if (nums.at(-1) === 0 || nums.at(-2) === 0) {
        return -1;
    }

    return result;
}

console.log(minOperations([0,1,1,1,0,0])); // 3
