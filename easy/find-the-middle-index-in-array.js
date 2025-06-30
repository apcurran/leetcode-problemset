"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findMiddleIndex(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const leftNums = nums.slice(0, i);
//         const rightNums = nums.slice(i + 1);
//         const leftNumsSum = leftNums.reduce((sum, currentNum) => sum + currentNum, 0);
//         const rightNumsSum = rightNums.reduce((sum, currentNum) => sum + currentNum, 0);

//         if (leftNumsSum === rightNumsSum) return i;
//     }

//     // default if no index is found
//     return -1;
// }

/**
 * solution 2 -- optimized (prefix and postfix values)
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMiddleIndex(nums) {
    const numsSum = nums.reduce((sum, currentNum) => sum + currentNum, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const rightSumWithoutCurrentNum = numsSum - leftSum - currentNum;

        if (leftSum === rightSumWithoutCurrentNum) return i;

        leftSum += currentNum;
    }

    // default if no index is found
    return -1;
}

console.log(findMiddleIndex([2, 3, -1, 8, 4])); // 3
console.log(findMiddleIndex([1, -1, 4])); // 2
console.log(findMiddleIndex([2, 5])); // -1
