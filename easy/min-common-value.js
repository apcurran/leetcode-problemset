"use strict";

/**
 * solution 1 -- hashset
 * n = nums1 length
 * m = nums2 length
 * time: O(n + m)
 * space: O(n)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
    const nums1Set = new Set(nums1);

    for (let num of nums2) {
        if (nums1Set.has(num)) return num;
    }

    return -1;
}

console.log(getCommon([1,2,3], [2,4])); // 2
console.log(getCommon([1,2,3,6], [2,3,4,5])); // 2
