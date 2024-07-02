"use strict";

/**
 * solution 1 -- two pointers
 * time: O((n * log n) + (m * log m)) -- sorting arrs
 * space: O(n + m) -- sorting arrs
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    // sort arrays first
    nums1.sort(sortAsc);
    nums2.sort(sortAsc);

    let nums1Pointer = 0;
    let nums2Pointer = 0;
    let results = [];

    while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
        if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
            nums1Pointer++;
        } else if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums2Pointer++;
        } else {
            // equal match
            results.push(nums1[nums1Pointer]);
            // move pointers
            nums1Pointer++;
            nums2Pointer++;
        }
    }

    return results;
}

console.log(intersect([4,9,5], [9,4,9,8,4])); // [4, 9]

/**
 * @param {number} numA 
 * @param {number} numB 
 * @returns {number}
 */
function sortAsc(numA, numB) {
    return numA - numB;
}
