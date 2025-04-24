"use strict";

/**
 * solution 1 -- brute force (hashset)
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function countCompleteSubarrays(nums) {
    const distinctNums = new Set(nums);
    let subarrayDistinctNums = new Set();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            subarrayDistinctNums.add(nums[j]);
            // check for same amount of distinct values
            if (subarrayDistinctNums.size === distinctNums.size) {
                result++;
            }
        }

        // reset before next outer loop iteration
        subarrayDistinctNums.clear();
    }

    return result;
}

console.log(countCompleteSubarrays([1,3,1,2,2])); // 4
console.log(countCompleteSubarrays([5,5,5,5])); // 10
