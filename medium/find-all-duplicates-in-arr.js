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

/**
 * Solution 2
 * 
 * Time: O(n log n) - due to JS sorting algo
 * Space: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
    nums.sort((a, b) => a - b);
    let dupsArr = [];
    // Each num in arr should only appear once in order
    // If the current num is the same as the prev num, then it is a dup
    // Dup may be added to dupsArr

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const prevNum = nums[i - 1];

        if (currNum === prevNum) {
            // Dup
            dupsArr.push(currNum);
        }
    }

    return dupsArr;
}

console.log( findDuplicates([4,3,2,7,8,2,3,1]) ); // [2, 3]
console.log( findDuplicates([1,1,2]) ); // [1]
console.log( findDuplicates([1]) ); // []
