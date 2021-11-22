"use strict";

/**
 * Solution 1 -- O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums) {
    return [...nums, ...nums];
}

// /**
//  * Solution 2 -- O(n)
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function getConcatenation(nums) {
//     let resultArr = [];

//     for (let num of nums) {
//         resultArr.push(num);
//     }

//     for (let num of nums) {
//         resultArr.push(num);
//     }

//     return resultArr;
// }

console.log( getConcatenation([1,2,1]) ); // [1,2,1,1,2,1]
console.log( getConcatenation([1,3,2,1]) ); // [1,3,2,1,1,3,2,1]