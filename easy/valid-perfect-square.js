"use strict";

/**
 * O(1)
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
    const sqrtNum = Math.sqrt(num);
    
    return sqrtNum % 1 === 0 ? true : false;
}

console.log( isPerfectSquare(16) ); // true
console.log( isPerfectSquare(14) ); // false