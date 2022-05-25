"use strict";

/**
 * solution 1
 * n = len of nums arr
 * m = len of digits in each num
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
    let evenDigitAmtCounter = 0;

    for (let num of nums) {
        const numDigitsCount = String(num).length;
        const isDigitCountEven = numDigitsCount % 2 === 0;
        
        if (isDigitCountEven) evenDigitAmtCounter++;
    }

    return evenDigitAmtCounter;
}

console.log( findNumbers([12, 345, 2, 6, 7896]) ); // 2
