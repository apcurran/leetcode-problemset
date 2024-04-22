"use strict";

/**
 * solution 1
 * n = nums length
 * m = num digits length
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function sumOfEncryptedInt(nums) {
    return nums.reduce((sum, currentNum) => sum + encrypt(currentNum), 0);
}

/**
 * @param {number} num 
 * @returns {number}
 */
function encrypt(num) {
    const strNum = String(num);
    let largestDigitofNum = Number(strNum[0]);

    for (let i = 1; i < strNum.length; i++) {
        const digit = Number(strNum[i]);
        largestDigitofNum = Math.max(largestDigitofNum, digit);
    }

    const replacedStrNum = String(largestDigitofNum).repeat(strNum.length);

    return Number(replacedStrNum);
}

console.log(encrypt(10));
console.log(encrypt(21));
console.log(encrypt(31));
