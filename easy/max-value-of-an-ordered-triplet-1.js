"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^3)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maximumTripletValue(nums) {
//     let maxValue = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 const currentValue = (nums[i] - nums[j]) * nums[k];
//                 maxValue = Math.max(maxValue, currentValue);
//             }
//         }
//     }

//     return maxValue;
// }

/**
 * solution 2 -- greedy
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {
    let maxValue = 0;
    let leftValue = nums[0];
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] > leftValue) {
            leftValue = nums[j];

            continue;
        }

        for (let k = j + 1; k < nums.length; k++) {
            const currentValue = (leftValue - nums[j]) * nums[k];
            maxValue = Math.max(maxValue, currentValue);
        }
    }

    return maxValue;
}

console.log(maximumTripletValue([12, 6, 1, 2, 7])); // 77
