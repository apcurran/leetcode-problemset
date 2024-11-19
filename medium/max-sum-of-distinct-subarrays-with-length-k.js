"use strict";

/**
 * solution 1 -- hashset -- correct, but TLE
 * time: O(n * k)
 * time: O(k) subarray chunk
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximumSubarraySum(nums, k) {
    let maxSum = 0;

    for (let i = 0; i <= nums.length - k; i++) {
        const subarray = nums.slice(i, i + k);
        const distinctSubarrayNums = new Set(subarray);

        // not all elems are distinct
        if (distinctSubarrayNums.size !== subarray.length) {
            continue;
        }

        // check the subarray sum
        const subarraySum = subarray.reduce((sum, current) => sum + current, 0);
        maxSum = Math.max(maxSum, subarraySum);
    }

    return maxSum;
}

console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3)); // 15
console.log(maximumSubarraySum([4,4,4], 3)); // 0
console.log(maximumSubarraySum([1,1,1,7,8,9], 3)); // 24
