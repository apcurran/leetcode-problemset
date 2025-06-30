"use strict";

/**
 * solution 1
 * time: O(n + (k * n))
 * space: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLucky(s, k) {
    // change string chars to digits
    const adjustedCharCodeStart = 96;
    let charDigitsStr = "";

    for (let char of s) {
        const adjustedCharNum = char.charCodeAt(0) - adjustedCharCodeStart;
        charDigitsStr += adjustedCharNum;
    }

    let charDigitsSum = charDigitsStr;

    for (let i = 0; i < k; i++) {
        // transform func to sum digits
        // repeat k times
        const currentDigitsSum = transformCharDigitsStrToSum(charDigitsSum);
        charDigitsSum = String(currentDigitsSum);
    }
    // return result
    return Number(charDigitsSum);
}

/**
 *
 * @param {string} charDigitsStr
 * @returns {number}
 */
function transformCharDigitsStrToSum(charDigitsStr) {
    let digitsSum = 0;

    for (let charDigit of charDigitsStr) {
        const digit = Number(charDigit);
        digitsSum += digit;
    }

    return digitsSum;
}

console.log(getLucky("leetcode", 2)); // 6
