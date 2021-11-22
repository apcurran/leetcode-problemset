"use strict";

/**
 * O(n^2)
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
    let resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        let innerSum = 0;

        for (let j = 0; j <= i; j++) {
            innerSum += nums[j];
        }

        resultArr.push(innerSum);
    }

    return resultArr;
}

console.log( runningSum([1,2,3,4]) ); // [1,3,6,10] -- Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].