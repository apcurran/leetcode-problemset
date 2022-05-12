"use strict";

/**
 * solution 1 -- Set cache
 * time: O(n^2) -- spread operation within a loop
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    let distinctNums = new Set(nums);
    let thirdMaxNum = 0;
    let numCount = 0;

    if (distinctNums.size < 3) {
        return Math.max(...distinctNums);
    }

    while (numCount < 3) {
        const currMax = Math.max(...distinctNums);
        thirdMaxNum = currMax;

        distinctNums.delete(currMax);
        numCount++;
    }

    return thirdMaxNum;
}

// /**
//  * solution 2 -- sort & Set
//  * time: O(n log n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function thirdMax(nums) {
//     nums.sort((a, b) => b - a);
//     const distinctNums = new Set(nums);

//     if (distinctNums.size < 3) {
//         return Math.max(...distinctNums);
//     }

//     return [...distinctNums][2];
// }

console.log( thirdMax([2, 1, 3]) ); // 1
console.log( thirdMax([1, 2]) ); // 2
console.log( thirdMax([2, 2, 3, 1]) ); // 1
