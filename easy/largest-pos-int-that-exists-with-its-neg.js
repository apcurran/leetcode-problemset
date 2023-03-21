"use strict";

/**
 * solution 1 -- Set cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
    const uniqueNums = new Set(nums);
    let largestPositiveIntWithExistingNegative = -1;

    for (let num of nums) {
        const isNumPositive = num > 0;

        if (!isNumPositive) continue;

        const isNegNumFound = uniqueNums.has(-num);

        if (isNegNumFound) {
            largestPositiveIntWithExistingNegative = Math.max(largestPositiveIntWithExistingNegative, num);
        }
    }

    return largestPositiveIntWithExistingNegative;
}

console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // 7
