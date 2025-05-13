"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^3 + m * log m)
 * space: O(m)
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
function findEvenNumbers(digits) {
    let validEvenNums = new Set();

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || j === k || i === k) {
                    continue;
                }

                // add hundreds + tens + ones places together for sum
                const createdValue = (digits[i] * 100) + (digits[j] * 10) + digits[k];

                if (createdValue >= 100 && createdValue % 2 === 0) {
                    // even and valid 3-digit int
                    validEvenNums.add(createdValue);
                }
            }
        }
    }

    return [...validEvenNums].sort(function sortAsc(a, b) {
        return a - b;
    });
}

console.log(findEvenNumbers([2, 1, 3, 0])); // [102,120,130,132,210,230,302,310,312,320]
