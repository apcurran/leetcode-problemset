"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxAscendingSum(nums) {
    let globalMaxSum = -Infinity;
    let localSum = nums[0]; // start at the first num since the loop begins at second num

    // iterate nums list
    for (let i = 1; i < nums.length; i++) {
        const previousNum = nums[i - 1];
        const currentNum = nums[i];
        // check if current number is > previous number
        if (currentNum > previousNum) {
            // if so, add this num to a sum variable
            localSum += currentNum;
        } else {
            // else, take sum and Math.max() with global sum
            globalMaxSum = Math.max(globalMaxSum, localSum);
            // reset local sum
            localSum = currentNum;
        }
    }

    // account for last iteration of loop to apply Max
    globalMaxSum = Math.max(globalMaxSum, localSum);

    // return global sum
    return globalMaxSum;
}

console.log( maxAscendingSum([10,20,30,5,10,50]) ); // 65
console.log( maxAscendingSum([10,20,30,40,50]) ); // 150
console.log( maxAscendingSum([12,17,15,13,10,11,12]) ); // 33
