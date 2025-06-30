"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function sumOfSquares(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const isSpecial = nums.length % (i + 1) === 0;

        if (!isSpecial) continue;

        const squaredSpecialNum = nums[i] * nums[i];
        sum += squaredSpecialNum;
    }

    return sum;
}

console.log(sumOfSquares([1, 2, 3, 4])); // 21
