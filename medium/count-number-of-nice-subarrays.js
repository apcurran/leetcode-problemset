"use strict";

/**
 * solution 1 -- Correct, but TLE
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarrays(nums, k) {
    let niceSubarraysCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let subarrayOddsCount = 0;

        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 === 1) {
                subarrayOddsCount++;
            }

            if (subarrayOddsCount === k) {
                niceSubarraysCount++;
            }
        }

    }

    return niceSubarraysCount;
}

console.log(numberOfSubarrays([1,1,2,1,1], 3)); // 2
console.log(numberOfSubarrays([2,4,6], 1)); // 0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // 16
