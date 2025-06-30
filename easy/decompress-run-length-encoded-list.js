"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
    let results = [];

    for (let i = 0; i < nums.length - 1; i += 2) {
        const numFrequency = nums[i];
        const numValue = nums[i + 1];

        for (let j = 0; j < numFrequency; j++) {
            results.push(numValue);
        }
    }

    return results;
}

console.log(decompressRLElist([1, 2, 3, 4])); // [2, 4, 4, 4]
