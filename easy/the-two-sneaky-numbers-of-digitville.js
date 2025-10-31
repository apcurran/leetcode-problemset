"use strict";

// /**
//  * solution 1 -- hashset
//  * time: O(n)
//  * space: O(n) -- set
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function getSneakyNumbers(nums) {
//     let seenNums = new Set();
//     let sneakyNums = [];

//     for (let num of nums) {
//         if (seenNums.has(num)) {
//             sneakyNums.push(num);
//         }

//         seenNums.add(num);
//     }

//     return sneakyNums;
// }

/**
 * solution 2 -- brute force
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums) {
    let sneakyNums = [];

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const otherNum = nums[j];

            if (currentNum === otherNum) {
                sneakyNums.push(currentNum);
            }
        }
    }

    return sneakyNums;
}

console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])); // [2, 3]
