"use strict";

/**
 * solution 1 -- using built-in sqrt func (not meeting problem constraints)
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
    const sqrtNum = Math.sqrt(num);
    
    return Number.isInteger(sqrtNum);
}

console.log( isPerfectSquare(16) ); // true
console.log( isPerfectSquare(14) ); // false