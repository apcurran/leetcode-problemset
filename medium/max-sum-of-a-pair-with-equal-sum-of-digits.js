"use strict";

/**
 * solution 1 -- brute force (TLE)
 * x = nums[i]
 * y = nums[y]
 * time: O(n^2 * max(x, y))
 * space: O(max(x, y)) -- split creates a new array
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumSum(nums) {
    let max = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const iDigitsSum = String(nums[i])
                                .split("")
                                .reduce((sum, current) => sum + Number(current), 0);
            const jDigitsSum = String(nums[j])
                                .split("")
                                .reduce((sum, current) => sum + Number(current), 0);
            if (iDigitsSum === jDigitsSum) {
                const numsSum = nums[i] + nums[j];
                max = Math.max(max, numsSum);
            }
        }
    }

    return max;
}

console.log(maximumSum([18,43,36,13,7])); // 54
