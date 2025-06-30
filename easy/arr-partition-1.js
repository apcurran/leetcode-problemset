"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n * log n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function arrayPairSum(nums) {
//     nums.sort((a, b) => a - b);
//     let resMax = 0;

//     for (let [index, num] of nums.entries()) {
//         if (index % 2 === 0) {
//             resMax += num;
//         }
//     }

//     return resMax;
// }

// /**
//  * solution 2 -- iterative
//  * time: O(n * log n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function arrayPairSum(nums) {
//     nums.sort((a, b) => a - b);

//     return nums.reduce((sum, currNum, index) => {
//         if (index % 2 === 0) return sum + currNum;

//         return sum;
//     }, 0);
// }

/**
 * solution 3 -- iterative
 * time: O(n * log n) -> slightly less work with half the iterations in the lower for loop
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let max = 0;

    for (let i = 0; i < nums.length; i += 2) {
        max += nums[i];
    }

    return max;
}

console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9
