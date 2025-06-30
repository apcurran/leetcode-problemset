"use strict";

/**
 * Solution 1 -- two pointer approach
 * m = num of elems in nums1
 * n = num of elems in nums2
 *
 * time: O(m + n)
 * space: O(1)
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let nums1Index = m - 1;
    let nums2Index = n - 1;
    let i = m + n - 1;

    // Iterate backwards
    while (nums2Index >= 0) {
        const firstVal = nums1[nums1Index];
        const secondVal = nums2[nums2Index];

        if (firstVal > secondVal) {
            nums1[i] = firstVal;
            i--;
            nums1Index--;
        } else {
            nums1[i] = secondVal;
            i--;
            nums2Index--;
        }
    }

    console.log(nums1);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
