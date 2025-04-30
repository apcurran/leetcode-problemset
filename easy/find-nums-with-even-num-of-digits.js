"use strict";

// /**
//  * solution 1
//  * n = len of nums arr
//  * m = length of current num string
//  * time: O(n * m)
//  * space: O(m)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findNumbers(nums) {
//     let evenDigitAmtCounter = 0;

//     for (let num of nums) {
//         const numDigitsCount = String(num).length;
//         const isDigitCountEven = numDigitsCount % 2 === 0;
        
//         if (isDigitCountEven) evenDigitAmtCounter++;
//     }

//     return evenDigitAmtCounter;
// }

/**
 * solution 2 -- .filter() method
 * n = len of nums arr
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
    const evenDigitsNums = nums.filter((num) => {
        const numDigitsCount = String(num).length;

        return numDigitsCount % 2 === 0;
    });

    return evenDigitsNums.length;
}

console.log( findNumbers([12, 345, 2, 6, 7896]) ); // 2
