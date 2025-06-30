"use strict";

// /**
//  * solution 1 - nested loops
//  *
//  * time: O(n^2)
//  * space: O(1) - if not counting output arr as extra space
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function productExceptSelf(nums) {
//     let resArr = [];

//     for (let i = 0; i < nums.length; i++) {
//         let innerNumProd = 1;

//         for (let j = 0; j < nums.length; j++) {
//             // skip calc of curr i index
//             if (j === i) continue;

//             const innerNum = nums[j];
//             innerNumProd *= innerNum;
//         }

//         resArr.push(innerNumProd);
//     }

//     return resArr;
// }

/**
 * solution 2
 *
 * time: O(n)
 * space: O(1) - if not counting output arr as extra space
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    let resArr = [];

    // prefix prod op by traversing left to right
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];

        resArr[i] = prefix;
        prefix *= currNum;
    }

    // postfix prod op by traversing right to left
    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        const currNum = nums[i];

        resArr[i] *= postfix;
        postfix *= currNum;
    }

    return resArr;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
