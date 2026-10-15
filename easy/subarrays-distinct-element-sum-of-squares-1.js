"use strict";

/**
 * solution 1 -- Hash Set
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function sumCounts(nums) {
    let distinctCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let distinctValues = new Set();

        for (let j = i; j < nums.length; j++) {
            distinctValues.add(nums[j]);
            const squaredValue = distinctValues.size * distinctValues.size;
            distinctCount += squaredValue;
        }
    }

    return distinctCount;
}

console.log(sumCounts([1, 2, 1])); // 15
