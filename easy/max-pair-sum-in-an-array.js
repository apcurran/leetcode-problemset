"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
    let globalMaxSum = -1;

    for (let i = 0; i < nums.length; i++) {
        const maxDigit = getMaxDigit(nums[i]);

        for (let j = 0; j < i; j++) {
            if (maxDigit === getMaxDigit(nums[j])) {
                const currentMaxSum = nums[i] + nums[j];
                globalMaxSum = Math.max(globalMaxSum, currentMaxSum);
            }
        }
    }

    return globalMaxSum;
}

/**
 * @param {number} num 
 * @returns {number}
 */
function getMaxDigit(num) {
    let numCopy = num;
    let max = 0;

    while (numCopy > 0) {
        const modAmount = numCopy % 10;
        max = Math.max(max, modAmount);
        numCopy = (numCopy - modAmount) / 10;
    }

    return max;
}

console.log(maxSum([51,71,17,24,42])); // 88
