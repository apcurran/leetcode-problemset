"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number} num
 * @return {number}
 */
function splitNum(num) {
    const digits = String(num)
        .split("")
        .map(Number)
        .toSorted((digitA, digitB) => digitA - digitB);

    let num1Str = "";
    let num2Str = "";

    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            // even index
            num1Str += digits[i];
        } else {
            // odd index
            num2Str += digits[i];
        }
    }

    return Number(num1Str) + Number(num2Str);
}

console.log(splitNum(4325)); // 59
