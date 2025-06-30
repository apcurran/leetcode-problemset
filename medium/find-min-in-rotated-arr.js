"use strict";

// /**
//  * Solution 1 -- Math.min()
//  * Time: O(n)
//  * Space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findMin(nums) {
//     return Math.min(...nums);
// }

// /**
//  * Solution 2 -- iterative
//  * Time: O(n)
//  * Space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findMin(nums) {
//     let minNum = nums[0];

//     for (let num of nums) {
//         if (num < minNum) minNum = num;
//     }

//     return minNum;
// }

/**
 * Solution 2 -- iterative w/ Math.min()
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let minNum = nums[0];

    for (let num of nums) {
        minNum = Math.min(minNum, num);
    }

    return minNum;
}

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
