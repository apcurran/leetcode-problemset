"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
    const numDigitsArr = String(n)
                            .split("")
                            .map(Number);
    const digitsProd = numDigitsArr.reduce((total, curr) => total * curr, 1);
    const digitsSum = numDigitsArr.reduce((total, curr) => total + curr, 0);
    
    return digitsProd - digitsSum; 
}

console.log( subtractProductAndSum(234) ); // 15
console.log( subtractProductAndSum(4421) ); // 21
