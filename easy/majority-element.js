"use strict";

// /**
//  * solution 1 -- hashmap
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function majorityElement(nums) {
//     let numFrequencies = new Map();

//     for (let num of nums) {
//         const previousNumFrequency = numFrequencies.get(num) || 0;
//         numFrequencies.set(num, previousNumFrequency + 1);
//     }

//     for (let [num, numFrequency] of numFrequencies) {
//         if (numFrequency > (nums.length / 2)) {
//             return num;
//         }
//     }
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let majorityNumberFrequency = 0;
    let majorityNumber = 0;

    for (let num of nums) {
        if (majorityNumberFrequency === 0) {
            majorityNumber = num;
        }

        const amountToIncrement = num === majorityNumber ? 1 : -1;
        majorityNumberFrequency += amountToIncrement;
    }

    return majorityNumber;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
