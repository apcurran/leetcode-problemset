"use strict";

// /**
//  * Solution 1
//  * Time: O(n)
//  * Space: O(n)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function subtractProductAndSum(n) {
//     const numDigitsArr = String(n)
//                             .split("")
//                             .map(Number);
//     const digitsProd = numDigitsArr.reduce((total, curr) => total * curr, 1);
//     const digitsSum = numDigitsArr.reduce((total, curr) => total + curr, 0);

//     return digitsProd - digitsSum;
// }

// /**
//  * Solution 2 -- slight execution time improvement, fewer iterations
//  * Time: O(n)
//  * Space: O(n) - due to String primitive O(n) space complexity
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function subtractProductAndSum(n) {
//     const numDigitsStr = String(n);
//     let prod = 1;
//     let sum = 0;

//     for (let num of numDigitsStr) {
//         const numDigit = Number(num);
//         prod *= numDigit;
//         sum += numDigit;
//     }

//     return prod - sum;
// }

/**
 * Solution 3 -- (optimized approach) single iteration without any extra space being used
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
    let prod = 1;
    let sum = 0;

    while (n) {
        const mod = n % 10;
        prod *= mod;
        sum += mod;

        n = Math.floor(n / 10);
    }

    return prod - sum;
}

console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21
