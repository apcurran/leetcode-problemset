"use strict";

/**
 * solution 1 -- TLE
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK(nums, k) {
    let divisibleByKCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let subarraySum = 0;

        for (let j = i; j < nums.length; j++) {
            subarraySum += nums[j];

            if (subarraySum % k === 0) {
                divisibleByKCount++;
            }
        }

    }

    return divisibleByKCount;
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // 7
console.log(subarraysDivByK([5], 9)); // 0
