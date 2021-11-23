"use strict";

// /**
//  * Solution 1 -- O(log n)
//  * @param {number} n
//  * @return {boolean}
//  */
// function isPowerOfTwo(n) {
//     if (n === 1) return true;

//     if (n === 0 || n % 2 !== 0) return false;

//     // Recursively call func with new n val after dividing
//     return isPowerOfTwo(n / 2);
// }

/**
 * Solution 2 -- O(1)
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n === 0) return false;

    const baseTwoLog = Math.floor(Math.log2(n));
    const expectedExponentiation = 2 ** baseTwoLog;
    
    return expectedExponentiation === n;
}

console.log( isPowerOfTwo(16) ); // true -> 2^4 === 16
console.log( isPowerOfTwo(1) ); // true -> 2^0 === 1
console.log( isPowerOfTwo(3) ); // false
console.log( isPowerOfTwo(5) ); // false