"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function differenceOfSum(nums) {
    const elementsSum = nums.reduce((sum, currentNum) => sum + currentNum, 0);
    const digitsSum = nums
                        .join("")
                        .split("")
                        .reduce((sum, digitStr) => sum + Number(digitStr), 0);

    return Math.abs(elementsSum - digitsSum);
}

console.log( differenceOfSum([1,15,6,3]) ); // 25 - 16 = 9
