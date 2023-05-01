"use strict";

// /**
//  * solution 1
//  * time: O(n * log n) -- sort
//  * space: O(1)
//  * 
//  * @param {number[]} salary
//  * @return {number}
//  */
// function average(salary) {
//     salary.sort((a, b) => a - b);
//     let salarySum = 0;
    
//     // iterate through salary, skip first (min) and last (max)
//     for (let i = 1; i < salary.length - 1; i++) {
//         salarySum += salary[i];
//     }

//     const average = salarySum / (salary.length - 2); // remove two for the min and max exclusions

//     return average;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} salary
 * @return {number}
 */
function average(salary) {
    let salarySum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let num of salary) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        salarySum += num;
    }

    const salarySumExcludingMinMax = salarySum - min - max;
    const salaryLengthExcludingMinMax = salary.length - 2;
    
    return salarySumExcludingMinMax / salaryLengthExcludingMinMax;
}

console.log( average([4000,3000,1000,2000]) ); // 2500
