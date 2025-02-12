"use strict";

/**
 * solution 1 -- brute force (TLE)
 * x = nums[i] value
 * y = nums[y] value
 * time: O(n^2 * max(log x, log y))
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumSum(nums) {
    let max = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const iDigitsSum = sumNumDigits(nums[i]);
            const jDigitsSum = sumNumDigits(nums[j]);

            if (iDigitsSum === jDigitsSum) {
                const numsSum = nums[i] + nums[j];
                max = Math.max(max, numsSum);
            }
        }
    }

    return max;
}

/**
 * @param {number} num 
 * @returns {number}
 */
function sumNumDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10; // get last digit and add to sum
        num = Math.floor(num / 10); // remove last digit, before going to next iteration
    }

    return sum;
}

console.log(maximumSum([18,43,36,13,7])); // 54
