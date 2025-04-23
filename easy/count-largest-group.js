"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {number} n
 * @return {number}
 */
function countLargestGroup(n) {
    let map = new Map();

    for (let i = 1; i <= n; i++) {
        const digitSum = String(i).split("").reduce((sum, curr) => sum + Number(curr), 0);
        const previousDigitSumValues = map.get(digitSum) || [];
        previousDigitSumValues.push(i);
        map.set(digitSum, previousDigitSumValues);
    }

    let largestArrsLength = 0;

    for (let [, previousDigitSumValues] of map) {
        largestArrsLength = Math.max(largestArrsLength, previousDigitSumValues.length);
    }

    let result = 0;

    for (let [, previousDigitSumValues] of map) {
        if (previousDigitSumValues.length === largestArrsLength) {
            result++;
        }
    }

    return result;
}

console.log(countLargestGroup(13)); // 4
