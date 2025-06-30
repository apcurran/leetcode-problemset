"use strict";

/**
 * solution 1 -- correct, but TLE
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function getSumAbsoluteDifferences(nums) {
    let results = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let sum = 0;

        for (let otherNum of nums) {
            const absDiff = Math.abs(num - otherNum);
            sum += absDiff;
        }

        results[i] = sum;
    }

    return results;
}

console.log(getSumAbsoluteDifferences([2, 3, 5])); // [4, 3, 5]
console.log(getSumAbsoluteDifferences([1, 4, 6, 8, 10])); // [24, 15, 13, 15, 21]
