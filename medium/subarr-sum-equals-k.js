"use strict";

// /**
//  * solution 1 -- brute-force (correct, but TLE)
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function subarraySum(nums, k) {
//     let validSubarraysCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let localSum = 0;

//         for (let j = i; j < nums.length; j++) {
//             const currentNumber = nums[j];
//             localSum += currentNumber;

//             if (localSum === k) {
//                 validSubarraysCount++;
//             }
//         }
//     }

//     return validSubarraysCount;
// }

/**
 * solution 2 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    let currentSum = 0;
    let cache = new Map([
        // empty subarr
        [0, 1]
    ]);
    let validSubarraysCount = 0;

    for (let num of nums) {
        currentSum += num;
        const difference = currentSum - k;
        validSubarraysCount += cache.get(difference) || 0;
        
        const sumCount = cache.get(currentSum) || 0;
        cache.set(currentSum, sumCount + 1);
    }

    return validSubarraysCount;
}

console.log( subarraySum([1,2,3], 3) ); // 2
