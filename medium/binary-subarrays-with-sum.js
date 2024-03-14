"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
    let sumGoalSubarraysCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];

            if (currentSum === goal) {
                sumGoalSubarraysCount++;
            }

            if (currentSum > goal) break;
        }
    }

    return sumGoalSubarraysCount;
}

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); // 4
console.log(numSubarraysWithSum([0,0,0,0,0], 0)); // 15
