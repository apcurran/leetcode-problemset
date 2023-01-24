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
    // following digits alternate neg/pos
    let isDigitPositive = true;

    for (let i = 0; i < digitsStr.length; i++) {
        const digit = Number(digitsStr[i]);
        
        // add digits to total
        if (isDigitPositive) {
            digitsSum += digit;
        } else {
            digitsSum += (-digit);
        }

        // flip each iteration
        isDigitPositive = !isDigitPositive;
    }

    return digitsSum;
}

console.log( alternateDigitSum(521) ); // 4
console.log( alternateDigitSum(886996) ); // 886996
