"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n
 * @return {number}
 */
function alternateDigitSum(n) {
    // split into digits
    const digitsStr = String(n);
    // first digit is positive
    let digitsSum = 0;

    for (let i = 0; i < digitsStr.length; i++) {
        const digit = Number(digitsStr[i]);
        
        // add digits to total
        if (i % 2 === 0) {
            digitsSum += digit;
        } else {
            digitsSum += (-digit);
        }
    }

    return digitsSum;
}

console.log( alternateDigitSum(521) ); // 4
console.log( alternateDigitSum(886996) ); // 886996
