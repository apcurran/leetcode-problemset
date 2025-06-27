"use strict";

/**
 * solution 1 -- cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} num
 * @return {boolean}
 */
function digitCount(num) {
    const digitsArr = num
        .split("")
        .map((digitStr) => Number(digitStr));
    let digitsMap = new Map();

    for (let digit of digitsArr) {
        const prevCount = digitsMap.get(digit) || 0;
        digitsMap.set(digit, prevCount + 1);
    }

    for (let i = 0; i < digitsArr.length; i++) {
        const currDigit = digitsArr[i];
        const currDigitIndexCount = digitsMap.get(i) || 0;

        if (currDigit !== currDigitIndexCount) return false;
    }

    return true;  
}

console.log( digitCount("1210") ); // true
console.log( digitCount("030") ); // false
