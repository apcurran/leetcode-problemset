"use strict";

/**
 * Solution 2 Loop Way O(n)
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n < 1) return false;

    while (n % 3 === 0) {
        n = n / 3;
    }

    return n === 1;
}

// /**
//  * Solution 2 Math Way O(1)
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfThree(n) {
//     return n > 0 && 1162261467 % n == 0;
// }

// console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(28)); // false
