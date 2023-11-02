"use strict";

/**
 * solution 1 -- Set
 * time: O(n^3)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function sumCounts(nums) {
    let distinctCount = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const subArr = nums.slice(i, j + 1);
            const distinctValues = new Set(subArr);
            const squaredValue = distinctValues.size * distinctValues.size;
            distinctCount += squaredValue;
        }
    }

    return distinctCount;
}

console.log(sumCounts([1,2,1])); // 15
