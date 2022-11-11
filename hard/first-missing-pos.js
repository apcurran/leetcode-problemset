"use strict";

// /**
//  * solution 1 -- Correct, but not within problem constraints O(n) time and O(1) space
//  * time: O(n * log n)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function firstMissingPositive (nums) {
//     // ASC sort
//     nums.sort((a, b) => a - b);

//     let smallestPos = 1;

//     for (let num of nums) {
//         if (num === smallestPos) {
//             smallestPos++;

//             continue;
//         } else if (num <= 0) {
//             continue;
//         } else if (num > 0 && num !== smallestPos) {
//             continue;
//         } else {
//             break;
//         }
//     }

//     return smallestPos;
// }

/**
 * solution 2 -- Correct, but not within problem constraints O(n) time and O(1) space
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive (nums) {
    const numsSet = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) return i;
    }

    return nums.length + 1;
}

console.log( firstMissingPositive([1, 2, 0]) ); // 3
console.log( firstMissingPositive([3, 4, -1, 1]) ); // 2
console.log( firstMissingPositive([7, 8, 9, 11, 12]) ); // 1
console.log( firstMissingPositive([0, 2, 2, 1, 1]) ); // 3
