"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// function threeConsecutiveOdds(nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//         const firstNum = nums[i];
//         const secondNum = nums[i + 1];
//         const thirdNum = nums[i + 2];

//         if (firstNum % 2 !== 0 && secondNum % 2 !== 0 && thirdNum % 2 !== 0) {
//             return true;
//         }
//     }

//     return false;
// }

// /**
//  * solution 2 -- counter
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// function threeConsecutiveOdds(nums) {
//     let consecutiveOddsCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];

//         if (currentNum % 2 === 1) {
//             // odd num
//             consecutiveOddsCount++;
//         } else {
//             // otherwise, reset since this value is even
//             consecutiveOddsCount = 0;
//         }

//         if (consecutiveOddsCount === 3) {
//             return true;
//         }
//     }

//     return false;
// }

/**
 * solution 3 -- odd product
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function threeConsecutiveOdds(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        const product = nums[i] * nums[i + 1] * nums[i + 2];

        if (product % 2 === 1) {
            // three odds multiplied produces an odd result
            return true;
        }
    }

    return false;
}

console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
