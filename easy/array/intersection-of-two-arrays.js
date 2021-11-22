"use strict";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    // Always process the smallest arr as nums1
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    let numMap = new Map();

    for (let num of nums1) {
        const numFreq = numMap.get(num) + 1 || 1; // Retrieve prev occurring val and add one to it, or default to 1

        numMap.set(num, numFreq);
    }

    let resultArr = [];

    for (let num of nums2) {
        const numFreq = numMap.get(num);

        if (numFreq) {
            resultArr.push(num);
            numMap.set(num, numFreq - 1);
        }
    }

    return resultArr;
}

console.log( intersect([1, 2, 2, 1], [2, 2]) ); // [2, 2]
console.log( intersect([4, 9, 5], [9, 4, 9, 8, 4]) ); // [4, 9] or [9, 4]
console.log( intersect([1, 2, 2, 1], [2]) ); // [2]