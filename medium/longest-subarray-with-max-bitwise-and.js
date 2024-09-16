"use strict";

/**
 * solution 1 -- two pass
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function longestSubarray(nums) {
    let maxNum = Math.max.apply(null, nums);
    let maxLengthK = 0;
    let result = 0;

    for (let num of nums) {
        if (num === maxNum) {
            maxLengthK++;
        } else {
            maxLengthK = 0;
        }

        result = Math.max(result, maxLengthK);
    }

    return result;
}

console.log(longestSubarray([1,2,3,3,2,2])); // 2
console.log(longestSubarray([1,2,3,4])); // 1
