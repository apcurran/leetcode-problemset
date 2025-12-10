"use strict";

/**
 * solution 1
 * time: O(a + b + c)
 * space: O(a + b + c)
 *
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
function isSumEqual(firstWord, secondWord, targetWord) {
    const firstWordNumericalValue = getStringNumericalValue(firstWord);
    const secondWordNumericalValue = getStringNumericalValue(secondWord);
    const targetWordNumericalValue = getStringNumericalValue(targetWord);
    // add firstWord numerical value and secondWord numerical value for sum
    const sumOfFirstAndSecondWordValues = firstWordNumericalValue + secondWordNumericalValue;

    return sumOfFirstAndSecondWordValues === targetWordNumericalValue;
}

/**
 *
 * @param {string} str
 * @returns {number}
 */
function getStringNumericalValue(str) {
    const charCodeZeroBase = 97;
    let result = "";

    for (let letter of str) {
        const letterNumericalValue = letter.charCodeAt(0) - charCodeZeroBase;
        result += String(letterNumericalValue);
    }

    return Number(result);
}

console.log(isSumEqual("acb", "cba", "cdb")); // true
console.log(isSumEqual("aaa", "a", "aab")); // false
