"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number} num
 * @return {number}
 */
function minimumSum(num) {
    const digitsArr = num
        .toString()
        .split("")
        .map((digitStr) => +digitStr)
        .sort((a, b) => a - b);
                        
    const num1 = (digitsArr[0] * 10) + digitsArr[3];
    const num2 = (digitsArr[1] * 10) + digitsArr[2];
    
    return num1 + num2;
}

console.log( minimumSum(2932) );
