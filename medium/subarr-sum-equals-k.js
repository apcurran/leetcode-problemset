"use strict";

/**
 * solution 1 -- brute-force (correct, but TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    let validSubarraysCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let localSum = 0;

        for (let j = i; j < nums.length; j++) {
            const currentNumber = nums[j];
            localSum += currentNumber;

            if (localSum === k) {
                validSubarraysCount++;
            }
        }
    }

    return validSubarraysCount;
}

console.log( subarraySum([1,2,3], 3) ); // 2
