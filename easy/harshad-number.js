"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- num to string
 * 
 * @param {number} x
 * @return {number}
 */
function sumOfTheDigitsOfHarshadNumber(x) {
    const strNum = String(x);
    let digitsSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        const digit = Number(strNum[i]);
        digitsSum += digit;
    }

    if (x % digitsSum === 0) {
        return digitsSum;
    } else {
        return -1;
    }
}

console.log(sumOfTheDigitsOfHarshadNumber(18)); // 9
console.log(sumOfTheDigitsOfHarshadNumber(23)); // -1
