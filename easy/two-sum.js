"use strict";

// /**
//  * solution 1 -- brute-force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const outerNum = nums[i];

//         for (let j = i + 1; j < nums.length; j++) {
//             const innerNum = nums[j];
//             const sum = outerNum + innerNum;

//             if (sum === target) return [i, j];
//         }
//     }
// }

/**
 * solution 2 -- map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let numCache = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!numCache.has(num)) {
            // add to cache
            numCache.set(num, i);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const neededNum = target - num;

        if (numCache.has(neededNum)) {
            // get index
            const numIndex = numCache.get(neededNum);

            if (numIndex === i) {
                continue;
            }
            // return indices if sum equals target
            return [i, numIndex];
        } else {
            // set index/num in cache
            numCache.set(num, i);
        }
    }
}

console.log( twoSum([2, 7, 11, 15], 9) ); // [0, 1]
console.log( twoSum([3, 2, 4], 6) ); // [1, 2]
