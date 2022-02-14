"use strict";

// /**
//  * Solution 1
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxSubArray(nums) {
//     let maxSum = nums[0];

//     for (let i = 0; i < nums.length; i++) {
//         // Reset to 0
//         let localCurrSum = 0;

//         for (let j = i; j < nums.length; j++) {
//             const currNum = nums[j];
//             localCurrSum += currNum;

//             if (maxSum < localCurrSum) {
//                 maxSum = localCurrSum;
//             }
//         }
//     }

//     return maxSum;
// }

/**
 * Solution 2 -- Kadane's Algorithm
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let globalMax = nums[0];
    let localMax = 0;

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        // Which is bigger, starting a new sub-arr at the current number, or adding to the previous sub-arr sum?
        localMax = Math.max(currNum, currNum + localMax);

        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }

    return globalMax;
}

console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) ); // 6 -- [4,-1,2,1] has the largest sum = 6
