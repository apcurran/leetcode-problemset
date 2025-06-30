"use strict";

// /**
//  * solution 1
//  * time: O(n * m)
//  * space: O(n + m)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function countLargestGroup(n) {
//     let map = new Map();
//     let largestArrsLength = 0;

//     for (let i = 1; i <= n; i++) {
//         const digitSum = String(i).split("").reduce((sum, curr) => sum + Number(curr), 0);
//         const previousDigitSumValues = map.get(digitSum) || [];
//         previousDigitSumValues.push(i);
//         map.set(digitSum, previousDigitSumValues);

//         // update largest arr length
//         largestArrsLength = Math.max(largestArrsLength, previousDigitSumValues.length);
//     }

//     let result = 0;

//     for (let [, previousDigitSumValues] of map) {
//         if (previousDigitSumValues.length === largestArrsLength) {
//             result++;
//         }
//     }

//     return result;
// }

/**
 * solution 2
 * time: O(n * log m)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function countLargestGroup(n) {
    let map = new Map();
    let largestArrsLength = 0;

    for (let i = 1; i <= n; i++) {
        const digitSum = calcDigitsSum(i);
        const previousDigitSumValues = map.get(digitSum) || [];
        previousDigitSumValues.push(i);
        map.set(digitSum, previousDigitSumValues);

        // update largest arr length
        largestArrsLength = Math.max(
            largestArrsLength,
            previousDigitSumValues.length,
        );
    }

    let result = 0;

    for (let [, previousDigitSumValues] of map) {
        if (previousDigitSumValues.length === largestArrsLength) {
            result++;
        }
    }

    return result;
}

/**
 * @param {number} num
 * @returns {number}
 */
function calcDigitsSum(num) {
    let sum = 0;

    while (num !== 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(countLargestGroup(13)); // 4
