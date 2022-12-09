"use strict";

// /**
//  * solution 1 -- correct, but TLE
//  * time: O(n^3)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// function increasingTriplet(nums) {
//     // indices DO NOT have to be near each other (touching)
//     // but order must be maintained (no re-sorting)
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 const firstNum = nums[i];
//                 const secondNum = nums[j];
//                 const thirdNum = nums[k];

//                 if (firstNum < secondNum && secondNum < thirdNum) {
//                     return true;
//                 }
//             }
//         }
//     }

//     return false;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for (let thirdNumber of nums) {
        if (thirdNumber > secondNumber && thirdNumber > firstNumber) {
            return true;
        } else if (thirdNumber > firstNumber) {
            secondNumber = thirdNumber;
        } else {
            // current number is smaller than both numbers -> set first num to current num
            firstNumber = thirdNumber;
        }
    }

    return false;
}

console.log( increasingTriplet([1,2,3,4,5]) ); // true
console.log( increasingTriplet([5,4,3,2,1]) ); // false
console.log( increasingTriplet([2,1,5,0,4,6]) ); // true
console.log( increasingTriplet([20,100,10,12,5,13]) ); // true
