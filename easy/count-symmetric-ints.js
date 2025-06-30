"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countSymmetricIntegers(low, high) {
    let symmetricIntsCount = 0;

    for (let i = low; i <= high; i++) {
        if (isSymmetric(i)) symmetricIntsCount++;
    }

    return symmetricIntsCount;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isSymmetric(num) {
    const numStr = String(num);

    // odd length strings are always non-symmetric
    if (numStr.length % 2 !== 0) return false;

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < numStr.length / 2; i++) {
        const leftNum = Number(numStr[i]);
        const rightNum = Number(numStr[numStr.length - i - 1]);
        leftSum += leftNum;
        rightSum += rightNum;
    }

    return leftSum === rightSum;
}

console.log(countSymmetricIntegers(1, 100)); // 9
