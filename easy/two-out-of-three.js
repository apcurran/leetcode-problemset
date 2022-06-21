"use strict";

/**
 * solution 1
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
function twoOutOfThree(nums1, nums2, nums3) {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    const nums3Set = new Set(nums3);
    let resSet = new Set();

    for (let num of nums1Set) {
        if (nums2Set.has(num) || nums3Set.has(num)) {
            resSet.add(num);
        }
    }

    for (let num of nums2Set) {
        if (nums1Set.has(num) || nums3Set.has(num)) {
            resSet.add(num);
        }
    }

    return [...resSet];
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3, 2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2, 3, 1]
