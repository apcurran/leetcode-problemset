"use strict";

/**
 * solution 1 -- brute force (correct, but TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxWidthRamp(nums) {
    let maxWidth = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // check for nums[i] <= nums[j]
            if (nums[i] > nums[j]) continue;
            // if so, re-evaluate max width
            const currentWidth = j - i;
            maxWidth = Math.max(maxWidth, currentWidth);
        }
    }

    return maxWidth;
}

console.log(maxWidthRamp([6,0,8,2,1,5])); // 4
console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1])); // 7
