"use strict";

/**
 * solution 1
 * 
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
    let numsArr = [];

    outerLoop:
    for (let i = left; i <= right; i++) {
        const wholeNum = i;
        const numDigitArr = String(i)
                            .split("")
                            .map((digit) => +digit);
        
        for (let digit of numDigitArr) {
            // skip running rest of num if it contains a 0 digit
            if (digit === 0) continue outerLoop;

            // original num must divide by digit without a remainder
            if (wholeNum % digit !== 0) continue outerLoop;
        }

        numsArr.push(wholeNum);
    }

    return numsArr;
}

console.log( selfDividingNumbers(1, 22) ); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
