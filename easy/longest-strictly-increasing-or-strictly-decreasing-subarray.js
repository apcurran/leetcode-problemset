"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function longestMonotonicSubarray(nums) {
    let maxLength = 0;

    // strictly increasing subarrs
    for (let i = 0; i < nums.length; i++) {
        let currentLength = 1;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[j - 1]) {
                currentLength++;
            } else {
                break;
            }
        }

        maxLength = Math.max(maxLength, currentLength);
    }

    // strictly decreasing subarrs
    for (let i = 0; i < nums.length; i++) {
        let currentLength = 1;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[j - 1]) {
                currentLength++;
            } else {
                break;
            }
        }

        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
}

console.log(longestMonotonicSubarray([1,4,3,3,2])); // 2
