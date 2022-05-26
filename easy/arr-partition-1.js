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

/**
 * solution 2 -- iterative
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    
    return nums.reduce((sum, currNum, index) => {
        if (index % 2 === 0) return sum + currNum;

        return sum;
    }, 0);
}

console.log( arrayPairSum([1, 4, 3, 2]) ); // 4
console.log( arrayPairSum([6, 2, 6, 5, 1, 2]) ); // 9
