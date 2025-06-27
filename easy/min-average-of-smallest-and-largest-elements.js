"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function minimumAverage(nums) {
//     nums.sort(function sortAsc(a, b) {
//         return a - b;
//     });
//     const totalIterations = nums.length / 2;
//     let globalMin = Infinity;

//     // repeat n / 2 times
//     for (let i = 0; i < totalIterations; i++) {
//         const min = nums[0];
//         const max = nums[nums.length - 1];
//         const avg = (min + max) / 2;
//         globalMin = Math.min(globalMin, avg);
//         // remove min and max from arr
//         const numsWithMinAndMaxRemoved = nums.slice(1, nums.length - 1);
//         nums = numsWithMinAndMaxRemoved;
//     }

//     return globalMin;
// }

/**
 * solution 2
 * time: O(n * log n) -- array.sort()
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minimumAverage(nums) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });
    let globalMin = Infinity;

    for (let i = 0; i < nums.length / 2; i++) {
        const min = nums[i];
        const max = nums[nums.length - 1 - i];
        const average = (min + max) / 2;
        globalMin = Math.min(globalMin, average);
    }

    return globalMin;
}

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])); // 5.5
