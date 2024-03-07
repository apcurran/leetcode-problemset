"use strict";

// /**
//  * Restriction -- must only use constant space and cannot modify original nums arr
//  * solution 1
//  * Time: O(n^2) -- too slow
//  * Space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findDuplicate(nums) {
//     let duplicateCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const currNumToCheck = nums[i];

//         for (let j = 0; j < nums.length; j++) {
//             const currInnerNum = nums[j];

//             if (currInnerNum === currNumToCheck) {
//                 duplicateCount++;
//             }

//             if (duplicateCount > 1) {
//                 return currNumToCheck;
//             }
//         }

//         duplicateCount = 0;
//     }
// }

// /**
//  * solution 2 -- modify inputs (not allowed in description)
//  * Time: O(n)
//  * Space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findDuplicate(nums) {
//     for (let num of nums) {
//         const index = Math.abs(num);

//         if (nums[index] < 0) return index;

//         nums[index] = -nums[index];
//     }

//     // not found
//     return -1;
// }

/**
 * solution 3 -- binary search
 * Time: O(n * log n)
 * Space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    let left = 1;
    let right = nums.length - 1;
    let duplicate = -1;

    while (left <= right) {
        const current = left + Math.floor(((right - left) / 2));

        // count how many nums in array are <= current
        let count = 0;

        for (let num of nums) {
            if (num <= current) count++;
        }

        if (count > current) {
            duplicate = current;
            right = current - 1;
        } else {
            left = current + 1;
        }
    }

    return duplicate;
}

console.log( findDuplicate([1, 3, 4, 2, 2], ) ); // 2
console.log( findDuplicate([3, 1, 3, 4, 2], ) ); // 3
