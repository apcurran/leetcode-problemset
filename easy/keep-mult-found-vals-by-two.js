"use strict";

// /**
//  * solution -- recursive
//  * time: O(n^2)
//  * space: O(n) -- due to call stack
//  * 
//  * @param {number[]} nums
//  * @param {number} original
//  * @return {number}
//  */
// function findFinalValue(nums, original) {
//     for (let num of nums) {
//         if (num !== original) continue;

//         const newNum = num * 2;
//         return findFinalValue(nums, newNum);
//     }

//     return original;
// }

// /**
//  * solution 1 -- recursive (cleaned up)
//  * time: O(n^2)
//  * space: O(n) -- due to call stack
//  * 
//  * @param {number[]} nums
//  * @param {number} original
//  * @return {number}
//  */
// function findFinalValue(nums, original) {
//     if (!nums.includes(original)) return original;

//     return findFinalValue(nums, original * 2);
// }

/**
 * solution 2 -- iterative
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
function findFinalValue(nums, original) {
    while (nums.includes(original)) {
        original *= 2;
    }

    return original;
}

console.log( findFinalValue([2, 7, 9], 4) ); // 4
console.log( findFinalValue([5, 3, 6, 1, 12], 3) ); // 24
console.log( findFinalValue([8, 19, 4, 2, 15, 3], 2) ); // 16
