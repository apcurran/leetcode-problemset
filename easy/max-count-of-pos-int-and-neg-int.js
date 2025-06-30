"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
    let negativeNumsCount = 0;
    let positiveNumsCount = 0;

    for (let num of nums) {
        if (num < 0) {
            negativeNumsCount++;
        }

        if (num > 0) {
            positiveNumsCount++;
        }
    }

    return Math.max(negativeNumsCount, positiveNumsCount);
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
