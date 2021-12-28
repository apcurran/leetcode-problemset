"use strict";

// /**
//  * Solution 1
//  * 
//  * Time: O(n)
//  * Space: O(n)
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function findDuplicates(nums) {
//     let numsMap = new Map();
//     let dupsArr = [];

//     for (let num of nums) {
//         if (!numsMap.has(num)) {
//             numsMap.set(num, false);
//         } else {
//             numsMap.set(num, true);
//         }
//     }

//     for (let [num, isDup] of numsMap) {
//         if (isDup) {
//             dupsArr.push(num);
//         }
//     }

//     return dupsArr;
// }

// /**
//  * Solution 2
//  * 
//  * Time: O(n log n) - due to JS sorting algo
//  * Space: O(1)
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function findDuplicates(nums) {
//     nums.sort((a, b) => a - b);
//     let dupsArr = [];
//     // Each num in arr should only appear once in order
//     // If the current num is the same as the prev num, then it is a dup
//     // Dup may be added to dupsArr

//     for (let i = 0; i < nums.length; i++) {
//         const currNum = nums[i];
//         const prevNum = nums[i - 1];

//         if (currNum === prevNum) {
//             // Dup
//             dupsArr.push(currNum);
//         }
//     }

//     return dupsArr;
// }

// /**
//  * Solution 3
//  * 
//  * This solution eliminates the second for loop, and uses slightly less memory
//  * 
//  * Time: O(n)
//  * Space: O(n)
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function findDuplicates(nums) {
//     let numsMap = new Map();
//     let resArr = [];

//     for (let num of nums) {
//         if (!numsMap.has(num)) {
//             numsMap.set(num, false);
//         } else {
//             resArr.push(num);
//         }
//     }

//     return resArr;
// }

/**
 * Solution 4
 * 
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            // If the num is negative, it is a duplicate
            const dupNum = index + 1;
            resArr.push(dupNum);
        }

        // Set num to negative once seen the first time
        nums[index] = -nums[index];
    }

    return resArr;
}

console.log( findDuplicates([4,3,2,7,8,2,3,1]) ); // [2, 3]
console.log( findDuplicates([1,1,2]) ); // [1]
console.log( findDuplicates([1]) ); // []
