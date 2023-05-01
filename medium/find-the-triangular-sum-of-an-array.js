"use strict";

// /**
//  * solution 1 -- recursion
//  * time: O(n^2)
//  * space: O(n^2)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function triangularSum(nums) {
//     // base case
//     if (nums.length === 1) return nums[0];

//     let updatedList = [];

//     for (let i = 0; i < nums.length - 1; i++) {
//         const currentNum = nums[i];
//         const nextNum = nums[i + 1];
//         const sum = (currentNum + nextNum) % 10;
//         updatedList.push(sum);
//     }

//     // recursive case
//     return triangularSum(updatedList);
// }

/**
 * solution 2 -- iterative
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function triangularSum(nums) {
    if (nums.length === 1) return nums[0];

    while (nums.length > 1) {
        let updatedList = [];

        for (let i = 0; i < nums.length - 1; i++) {
            const currentNum = nums[i];
            const nextNum = nums[i + 1];
            const sum = (currentNum + nextNum) % 10;
            updatedList.push(sum);
        }

        nums = updatedList;
    }

    return nums[0];
}

console.log( triangularSum([1,2,3,4,5]) ); // 8
