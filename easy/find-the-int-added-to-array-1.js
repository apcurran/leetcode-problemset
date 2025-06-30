"use strict";

/**
 * solution 1 -- diff between smallest ints
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger(nums1, nums2) {
    const nums1Min = getMin(nums1);
    const nums2Min = getMin(nums2);

    return nums2Min - nums1Min;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function getMin(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }

    return min;
}

console.log(addedInteger([2, 6, 4], [9, 7, 5])); // 3
