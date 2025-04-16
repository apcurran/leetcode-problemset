"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^4)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function countGood(nums, k) {
//     let resultsCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         secondLoop: for (let j = i; j < nums.length; j++) {
//             let goodPairsSubarrayCounter = 0;

//             for (let m = i; m < j; m++) {
//                 for (let n = m + 1; n <= j; n++) {
//                     if (nums[m] === nums[n]) {
//                         goodPairsSubarrayCounter++;
//                     }
//                 }
//             }

//             if (goodPairsSubarrayCounter >= k) {
//                 resultsCount++;

//                 // small optimization
//                 continue secondLoop;
//             }
//         }

//     }

//     return resultsCount;
// }

/**
 * solution 2 -- hashmap
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countGood(nums, k) {
    let resultsCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let hashmap = new Map();
        let goodPairsSubarrayCounter = 0;

        for (let j = i; j < nums.length; j++) {
            const currentNumFrequency = hashmap.get(nums[j]) || 0;
            // update counter
            goodPairsSubarrayCounter += currentNumFrequency;
            // update hashmap
            hashmap.set(nums[j], currentNumFrequency + 1);

            if (goodPairsSubarrayCounter >= k) {
                resultsCount++;
            }
        }
    }

    return resultsCount;
}

console.log(countGood([3,1,4,3,2,2,4], 2)); // 4
