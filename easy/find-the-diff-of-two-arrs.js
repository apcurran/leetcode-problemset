"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]} 2d array
 */
function findDifference(nums1, nums2) {
    const distinctNums1 = new Set(nums1);
    const distinctNums2 = new Set(nums2);
    let numsNotInNums2 = [];
    let numsNotInNums1 = [];

    for (let num of distinctNums1) {
        // find all DISTINCT elems in nums1 NOT PRESENT in nums2 -> add array to results array
        if (!distinctNums2.has(num)) {
            numsNotInNums2.push(num);
        }
    }

    for (let num of distinctNums2) {
        // find all DISTINCT elems in nums2 NOT PRESENT in nums1 -> add array to results array
        if (!distinctNums1.has(num)) {
            numsNotInNums1.push(num);
        }
    }

    return [numsNotInNums2, numsNotInNums1];
}

console.log( findDifference([1, 2, 3], [2, 4, 6]) ); // [[1,3], [4,6]]
