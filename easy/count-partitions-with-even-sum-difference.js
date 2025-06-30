"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function countPartitions(nums) {
//     let count = 0;

//     for (let i = 0; i < nums.length - 1; i++) {
//         // get subarray sums
//         const leftSubarraySum = nums.slice(0, i + 1).reduce((sum, curr) => sum + curr, 0);
//         const rightSubarraySum = nums.slice(i + 1).reduce((sum, curr) => sum + curr, 0);
//         // get diff between sums
//         const subarraysDifference = leftSubarraySum - rightSubarraySum;

//         // check if diff is even
//         if (subarraysDifference % 2 === 0) {
//             count++;
//         }
//     }

//     return count;
// }

/**
 * solution 2 -- prefix and suffix sums
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function countPartitions(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((sum, current) => sum + current, 0);
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // get subarray sums
        const currentLeftValue = nums[i];
        leftSum += currentLeftValue;
        rightSum -= currentLeftValue;
        // get diff between sums
        const subarraysDifference = leftSum - rightSum;

        // check if diff is even
        if (subarraysDifference % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countPartitions([10, 10, 3, 7, 6])); // 4
