"use strict";

// /**
//  * solution 1 -- recursion
//  * time: O(log n)
//  * space: O(log n)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfFour(n) {
//     // base case
//     if (n === 1) return true;

//     // base case
//     if (n === 0 || n % 4 !== 0) return false;

//     return isPowerOfFour(n / 4);
// }

// /**
//  * solution 2 -- iterative
//  * time: O(log n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfFour(n) {
//     if (n === 0) return false;

//     while (n !== 1) {
//         if (n < 1) return false;

//         n = n / 4;
//     }

//     return true;
// }

// /**
//  * solution 3 -- math logarithms
//  * time: O(1)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfFour(n) {
//     if (n === 0) return false;

//     const baseFourLog = Math.log(n) / Math.log(4);

//     if (!Number.isInteger(baseFourLog)) return false;

//     return n === 4 ** baseFourLog;
// }

/**
 * solution 4 -- math logarithms (refined)
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n) {
    if (n <= 0) return false;

    // solving for k (the exponent of 4),
    // then check if an int
    return Number.isInteger(Math.log2(n) / 2);
}

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true
