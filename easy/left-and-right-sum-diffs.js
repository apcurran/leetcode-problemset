"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function leftRigthDifference(nums) {
    let leftSums = [0];
    let currentLeftSum = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const currentNum = nums[i];
        currentLeftSum += currentNum;
        leftSums.push(currentLeftSum);
    }

    let rightSums = [];

    for (let i = 1; i < nums.length; i++) {
        let miniSum = 0;

        for (let j = i; j < nums.length; j++) {
            miniSum += nums[j];
        }

        rightSums.push(miniSum);
    }

    rightSums.push(0);

    let leftAndRightSumDiffs = [];

    for (let i = 0; i < leftSums.length; i++) {
        const leftSum = leftSums[i];
        const rightSum = rightSums[i];
        const absDiff = Math.abs(leftSum - rightSum);
        leftAndRightSumDiffs.push(absDiff);
    }

    return leftAndRightSumDiffs;
}

console.log(leftRigthDifference([10, 4, 8, 3])); // [15,1,11,22]
console.log(leftRigthDifference([1])); // [0]
