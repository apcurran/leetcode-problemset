"use strict";

/**
 * solution 1 -- brute force, TLE
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} lowerLimit
 * @param {number} upperLimit
 * @return {number}
 */
function countFairPairs(nums, lowerLimit, upperLimit) {
    let fairPairCount = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];

            if (sum >= lowerLimit && sum <= upperLimit) {
                fairPairCount++;
            }
        }
    }

    return fairPairCount;
}

console.log(countFairPairs([0,1,7,4,4,5], 3, 6)); // 6
console.log(countFairPairs([1,7,9,2,5], 11, 11)); // 1
