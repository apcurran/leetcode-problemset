"use strict";

/**
 * solution 1
 * n = nums length
 * m = num digits length
 * time: O(n * m)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minElement(nums) {
    let smallestDigitsSum = Infinity;

    for (let num of nums) {
        // convert num into sum of digits
        const digitsSum = String(num)
            .split("")
            .reduce((sum, curr) => sum + Number(curr), 0);
        // check for smallest sum
        smallestDigitsSum = Math.min(smallestDigitsSum, digitsSum);
    }
    
    return smallestDigitsSum;
}

console.log(minElement([999,19,199])); // 10
