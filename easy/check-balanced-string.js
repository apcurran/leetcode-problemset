"use strict";

/**
 * solution 1
 * time: O(n) -- stringify num
 * space: O(n) -- stringify num
 * 
 * @param {string} num
 * @return {boolean}
 */
function isBalanced(num) {
    const strNum = String(num);
    let evenIndiceValuesSum = 0;
    let oddIndiceValuesSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        const digit = Number(strNum[i]);

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
