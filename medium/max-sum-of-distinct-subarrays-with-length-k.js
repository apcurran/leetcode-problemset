"use strict";

// /**
//  * solution 1 -- hashset -- correct, but TLE
//  * time: O(n * k)
//  * space: O(k) subarray chunk
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function maximumSubarraySum(nums, k) {
//     let maxSum = 0;

//     for (let i = 0; i <= nums.length - k; i++) {
//         const subarray = nums.slice(i, i + k);
//         const distinctSubarrayNums = new Set(subarray);

//         // not all elems are distinct
//         if (distinctSubarrayNums.size !== subarray.length) {
//             continue;
//         }

//         // check the subarray sum
//         const subarraySum = subarray.reduce((sum, current) => sum + current, 0);
//         maxSum = Math.max(maxSum, subarraySum);
//     }

//     return maxSum;
// }

/**
 * solution 2 -- hashmap
 * time: O(n)
 * time: O(n) subarray chunk
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximumSubarraySum(nums, k) {
    let maxSum = 0;
    let numCounts = new Map();
    let currentSum = 0;

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        const currentNum = nums[right];
        currentSum += currentNum;
        const currentNumCount = numCounts.get(currentNum) || 0;
        numCounts.set(currentNum, currentNumCount + 1);

        if (right - left + 1 > k) {
            // decrease left num count by 1
            const currentLeftNumCount = numCounts.get(nums[left]);
            numCounts.set(nums[left], currentLeftNumCount - 1);

            if (numCounts.get(nums[left]) === 0) {
                numCounts.delete(nums[left]);
            }

            // decrease sum by left num amount
            currentSum -= nums[left];
            // update pointer
            left++;
        }

        // total hashmap entries AND size of window equal to k
        if (numCounts.size === k && right - left + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    

    return maxSum;
}

console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3)); // 15
console.log(maximumSubarraySum([4,4,4], 3)); // 0
console.log(maximumSubarraySum([1,1,1,7,8,9], 3)); // 24
