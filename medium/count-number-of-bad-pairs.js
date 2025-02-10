"use strict";

/**
 * solution 1 -- brute force (TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function countBadPairs(nums) {
    let badPairsCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // i < j satisfied
            // j - i !== nums[j] - nums[i]

            if (j - i !== nums[j] - nums[i]) {
                badPairsCounter++;
            }
        }
    }

    return badPairsCounter;
}

console.log(countBadPairs([4,1,3,3])); // 5
console.log(countBadPairs([1,2,3,4,5])); // 0
