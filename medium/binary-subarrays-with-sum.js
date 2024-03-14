"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} goal
//  * @return {number}
//  */
// function numSubarraysWithSum(nums, goal) {
//     let sumGoalSubarraysCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let currentSum = 0;

//         for (let j = i; j < nums.length; j++) {
//             currentSum += nums[j];

//             if (currentSum === goal) {
//                 sumGoalSubarraysCount++;
//             }

//             if (currentSum > goal) break;
//         }
//     }

//     return sumGoalSubarraysCount;
// }

// /**
//  * solution 1 -- sliding window
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} goal
//  * @return {number}
//  */
// function numSubarraysWithSum(nums, goal) {
//     return helper(nums, goal) - helper(nums, goal - 1);
// }

// /**
//  * 
//  * @param {number[]} nums 
//  * @param {number} goal 
//  * @returns {number}
//  */
// function helper(nums, goal) {
//     if (goal < 0) return 0;

//     let left = 0;
//     let currentSum = 0;
//     let totalSubarraysLessThanOrEqualToGoal = 0;
    
//     for (let right = 0; right < nums.length; right++) {
//         currentSum += nums[right];

//         while (currentSum > goal) {
//             currentSum -= nums[left];
//             left++;
//         }

//         const windowSize = right - left + 1;
//         totalSubarraysLessThanOrEqualToGoal += windowSize;
//     }

//     return totalSubarraysLessThanOrEqualToGoal;
// }

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
    let totalSubarraysEqualToGoal = 0;
    let currentSum = 0;
    let prefixSumsFrequencies = new Map();

    for (let num of nums) {
        currentSum += num;

        if (currentSum === goal) {
            totalSubarraysEqualToGoal++;
        }

        // check hashmap
        if (prefixSumsFrequencies.has(currentSum - goal)) {
            const prefixSumFrequency = prefixSumsFrequencies.get(currentSum - goal);
            totalSubarraysEqualToGoal += prefixSumFrequency;
        }

        // get previous frequency
        const previousFrequency = prefixSumsFrequencies.get(currentSum) || 0;
        // update frequency
        prefixSumsFrequencies.set(currentSum, previousFrequency + 1);
    }

    return totalSubarraysEqualToGoal;
}

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); // 4
console.log(numSubarraysWithSum([0,0,0,0,0], 0)); // 15
