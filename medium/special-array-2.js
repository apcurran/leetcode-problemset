"use strict";

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function isArraySpecial(nums, queries) {
    let results = [];
    // iterate queries array
    for (let [queryStart, queryEnd] of queries) {
        // iterate range
        for (let i = queryStart; i <= queryEnd; i++) {
            const num1 = nums[i];
            const num2 = nums[i + 1];
            // if all adjacent nums in range are differing in odd/even status
            if (num1 % 2 !== 0 && num2 % 2 !== 0) {
                
            }
                // add true to results array
                // otherwise, add false to results
        }

    }

    return results;
}

console.log(isArraySpecial([4,3,1,6], [[0,2],[2,3]])); // [false, true]
