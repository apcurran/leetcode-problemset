"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function countSubarrays(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        const first = nums[i];
        const second = nums[i + 1];
        const third = nums[i + 2];
        const sum = first + third;

        if (sum === second / 2) {
            count++;
        }
    }

    return count;
}

console.log(countSubarrays([1, 2, 1, 4, 1])); // 1
console.log(countSubarrays([1, 1, 1])); // 0
