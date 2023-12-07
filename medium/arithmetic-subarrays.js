"use strict";

/**
 * solution 1 -- sort and check
 * time: O(m * (n * log n))
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
function checkArithmeticSubarrays(nums, l, r) {
    let results = [];

    for (let i = 0; i < l.length; i++) {
        const queryArr = nums.slice(l[i], r[i] + 1);
        results.push(isArithmeticSequence(queryArr));
    }

    return results;
}

/**
 * @param {number[]} nums 
 * @returns {boolean}
 */
function isArithmeticSequence(nums) {
    // sort ASC
    nums.sort((a, b) => a - b);
    let diff = nums[1] - nums[0];

    for (let i = 2; i < nums.length; i++) {
        const currentNum = nums[i];
        const previousNum = nums[i - 1];
        const currentDiff = currentNum - previousNum;

        if (currentDiff !== diff) {
            return false;
        }
    }

    return true;
}

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5])); // [true,false,true]
