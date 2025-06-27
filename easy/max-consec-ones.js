"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let currOnesCount = 0;
    let overallMax = 0;

    for (let num of nums) {
        if (num === 0) {
            currOnesCount = 0;
            continue;
        }

        currOnesCount++;

        if (currOnesCount > overallMax) overallMax = currOnesCount;
    }

    return overallMax;
}

console.log( findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]) ); // 3
console.log( findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]) ); // 2
