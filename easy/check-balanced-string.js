"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} num
 * @return {boolean}
 */
function isBalanced(num) {
    let evenIndiceValuesSum = 0;
    let oddIndiceValuesSum = 0;

    for (let i = 0; i < num.length; i++) {
        const digit = Number(num[i]);

        if (i % 2 === 0) {
            evenIndiceValuesSum += digit;
        } else {
            oddIndiceValuesSum += digit;
        }
    }

    return evenIndiceValuesSum === oddIndiceValuesSum;
}

console.log(isBalanced("1234")); // false
console.log(isBalanced("24123")); // true
