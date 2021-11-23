"use strict";

/**
 * O(log n)
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n === 1) return true;

    if (n === 0 || n % 2 !== 0) return false;

    // Recursively call func with new n val after dividing
    return isPowerOfTwo(n / 2);
}

console.log( isPowerOfTwo(16) ); // true -> 2^4 === 16
console.log( isPowerOfTwo(1) ); // true -> 2^0 === 1
console.log( isPowerOfTwo(3) ); // false
console.log( isPowerOfTwo(5) ); // false