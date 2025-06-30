"use strict";

// /**
//  * solution 1
//  * n = nums length
//  * m = num digits length
//  * time: O(n * m)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function separateDigits(nums) {
//     let results = [];

//     for (let num of nums) {
//         const numDigits = [...String(num)].map(Number);
//         results.push(...numDigits);
//     }

//     return results;
// }

/**
 * solution 2
 * x = total number of digits in nums
 * time: O(x)
 * space: O(x)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function separateDigits(nums) {
    return Array.from(nums.join(""), Number);
}

console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
