"use strict";

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    const filteredNums1 = nums1.filter((num) => num > 0);
    const filteredNums2 = nums2.filter((num) => num > 0);
    const mergedArrs = [...filteredNums1, ...filteredNums2];
    const sortedArr = mergedArrs.sort((a, b) => a - b);
    
    nums1 = sortedArr;
}

console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]