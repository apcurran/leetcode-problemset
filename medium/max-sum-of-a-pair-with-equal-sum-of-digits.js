"use strict";

// /**
//  * solution 1 -- brute force (TLE)
//  * x = nums[i] value
//  * y = nums[y] value
//  * time: O(n^2 * max(log x, log y))
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maximumSum(nums) {
//     let max = -1;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const iDigitsSum = sumNumDigits(nums[i]);
//             const jDigitsSum = sumNumDigits(nums[j]);

//             if (iDigitsSum === jDigitsSum) {
//                 const numsSum = nums[i] + nums[j];
//                 max = Math.max(max, numsSum);
//             }
//         }
//     }

//     return max;
// }

// /**
//  * @param {number} num 
//  * @returns {number}
//  */
// function sumNumDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         sum += num % 10; // get last digit and add to sum
//         num = Math.floor(num / 10); // remove last digit, before going to next iteration
//     }

//     return sum;
// }

/**
 * solution 2 -- sort
 * x = nums[i] value
 * y = nums[y] value
 * time: O(n * log n) -- sorting
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumSum(nums) {
    let digitSumPairs = nums.map((num) => {
        const digitSum = sumNumDigits(num);

        return [digitSum, num];
    }).sort(function sortByDigitSumThenNumValue([aDigitSum, aNum], [bDigitSum, bNum]) {
        if (aDigitSum === bDigitSum) {
            return aNum - bNum;
        } else {
            return aDigitSum - bDigitSum;
        }
    });    

    let maxPairSum = -1;

    for (let i = 0; i < digitSumPairs.length - 1; i++) {
        const currentDigitSum = digitSumPairs[i][0];
        const nextDigitSum = digitSumPairs[i + 1][0];

        if (currentDigitSum === nextDigitSum) {
            const currentNumValue = digitSumPairs[i][1];
            const nextNumValue = digitSumPairs[i + 1][1];
            const pairSum = currentNumValue + nextNumValue;
            maxPairSum = Math.max(maxPairSum, pairSum);
        }
    }

    return maxPairSum;
}

/**
 * @param {number} num 
 * @returns {number}
 */
function sumNumDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10; // get last digit and add to sum
        num = Math.floor(num / 10); // remove last digit, before going to next iteration
    }

    return sum;
}

console.log(maximumSum([18,43,36,13,7])); // 54
