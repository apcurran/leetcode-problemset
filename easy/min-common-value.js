"use strict";

// /**
//  * solution 1 -- hashset
//  * n = nums1 length
//  * m = nums2 length
//  * time: O(n + m)
//  * space: O(n)
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// function getCommon(nums1, nums2) {
//     const nums1Set = new Set(nums1);

//     for (let num of nums2) {
//         if (nums1Set.has(num)) return num;
//     }

//     return -1;
// }

/**
 * solution 2 -- two pointers
 * n = nums1 length
 * m = nums2 length
 * time: O(n + m)
 * space: O(1)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
    let nums1Pointer = 0;
    let nums2Pointer = 0;

    while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
        if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
            // move nums1Pointer forwards
            nums1Pointer++;
        } else if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums2Pointer++;
        } else {
            // equal values
            return nums1[nums1Pointer];
        }
    }

    return -1;
}

console.log(getCommon([1, 2, 3], [2, 4])); // 2
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2
