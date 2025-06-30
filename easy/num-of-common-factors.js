"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function commonFactors(a, b) {
    const smallerNumber = Math.min(a, b);
    let commonFactorCount = 0;
    // take smallest number
    // iterate up to smallest
    for (let i = 1; i <= smallerNumber; i++) {
        // check if this value divides into a and b evenly
        const isADivisibleByValue = Number.isInteger(a / i);
        const isBDivisibleByValue = Number.isInteger(b / i);
        // if so, increment counter
        if (isADivisibleByValue && isBDivisibleByValue) {
            commonFactorCount++;
        }
    }

    return commonFactorCount;
}

console.log(commonFactors(12, 6)); // 4
console.log(commonFactors(25, 30)); // 2
