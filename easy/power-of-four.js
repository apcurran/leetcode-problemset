"use strict";

// /**
//  * solution 1
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
//     if (n === 0 || n % 2 !== 0) return false;

//     return isPowerOfFour(n / 4);
// }

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n
 * @return {boolean}
*/
function isPowerOfFour(n) {
    if (n === 0) return false;

    const baseFourLog = Math.log(n) / Math.log(4);

    if (!Number.isInteger(baseFourLog)) return false;

    return n === 4 ** baseFourLog;
}

console.log( isPowerOfFour(16) ); // true
console.log( isPowerOfFour(5) ); // false
console.log( isPowerOfFour(1) ); // true
