"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n^2) -- array.includes() within loop
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function missingNumber(nums) {
//     for (let i = 0; i <= nums.length; i++) {
//         if (!nums.includes(i)) return i;
//     }

//     return -1;
// }

// /**
//  * solution 2 -- sort
//  * time: O(n * log n)
//  * space: O(n) -- sorting uses linear space
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function missingNumber(nums) {
//     nums.sort(function sortAsc(a, b) {
//         return a - b;
//     });

//     if (nums[0] !== 0) return 0;

//     if (nums[nums.length - 1] !== nums.length) return nums.length;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== i) return i;
//     }

//     return -1;
// }

/**
 * solution 3 -- math (Gauss summation formula)
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const allNumsSum = (nums.length * (nums.length + 1)) / 2;
    const actualNumsSum = nums.reduce((sum, current) => sum + current, 0);
    
    return allNumsSum - actualNumsSum;
}

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
