"use strict";

// /**
//  * Solution 1
//  * time: O(log n)
//  * space: O(log n)
//  * 
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfTwo(n) {
//     if (n === 1) return true;

//     if (n === 0 || n % 2 !== 0) return false;

//     // Recursively call func with new n val after dividing
//     return isPowerOfTwo(n / 2);
// }

// /**
//  * Solution 2 -- math
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfTwo(n) {
//     return Number.isInteger(Math.log2(n));
// }

/**
 * Solution 3 -- loop
 * time: O(1) -- bounded by 32 interations max
 * space: O(1)
 * 
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    let multipleOfTwo = 1;

    while (multipleOfTwo < n) {
        multipleOfTwo *= 2;
    }

    return multipleOfTwo === n;
}

console.log( isPowerOfTwo(16) ); // true -> 2^4 === 16
console.log( isPowerOfTwo(1) ); // true -> 2^0 === 1
console.log( isPowerOfTwo(3) ); // false
console.log( isPowerOfTwo(5) ); // false
