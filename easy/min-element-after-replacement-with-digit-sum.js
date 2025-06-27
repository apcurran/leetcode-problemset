"use strict";

// /**
//  * solution 1
//  * n = nums length
//  * m = num digits length
//  * time: O(n * m)
//  * space: O(m) copy of digits with string coercion and split
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function minElement(nums) {
//     let smallestDigitsSum = Infinity;

//     for (let num of nums) {
//         // convert num into sum of digits
//         const digitsSum = String(num)
//             .split("")
//             .reduce((sum, curr) => sum + Number(curr), 0);
//         // check for smallest sum
//         smallestDigitsSum = Math.min(smallestDigitsSum, digitsSum);
//     }

//     return smallestDigitsSum;
// }

/**
 * solution 2
 * n = nums length
 * m = num digits length
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minElement(nums) {
    let smallestDigitsSum = Infinity;

    for (let num of nums) {
        const digitsSum = sumDigits(num);
        smallestDigitsSum = Math.min(smallestDigitsSum, digitsSum);
    }

    return smallestDigitsSum;
}

/**
 * @param {number} num 
 * @returns {number}
 */
function sumDigits(num) {
    let sum = 0;
    
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(minElement([999, 19, 199])); // 10
