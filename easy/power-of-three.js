"use strict";

// /**
//  * solution 1 -- iterative
//  * b = 3
//  * time: O(logb * n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfThree(n) {
//     if (n < 1) return false;

//     while (n % 3 === 0) {
//         n /= 3;
//     }

//     return n === 1;
// }

/**
 * solution 2 -- recursive
 * b = 3
 * time: O(logb * n)
 * space: O(logb * n)
 *
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n === 1) return true;

    if (n < 1) return false;

    return isPowerOfThree(n / 3);
}

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
