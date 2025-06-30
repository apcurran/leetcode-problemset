"use strict";

// /**
//  * solution 1 -- two pointers
//  * time: O((n * log n) + (m * log m)) -- sorting arrs
//  * space: O(n + m) -- sorting arrs
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// function intersect(nums1, nums2) {
//     // sort arrays first
//     nums1.sort(sortAsc);
//     nums2.sort(sortAsc);

//     let nums1Pointer = 0;
//     let nums2Pointer = 0;
//     let results = [];

//     while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
//         if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
//             nums1Pointer++;
//         } else if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
//             nums2Pointer++;
//         } else {
//             // equal match
//             results.push(nums1[nums1Pointer]);
//             // move pointers
//             nums1Pointer++;
//             nums2Pointer++;
//         }
//     }

//     return results;
// }

// console.log(intersect([4,9,5], [9,4,9,8,4])); // [4, 9]

// /**
//  * @param {number} numA
//  * @param {number} numB
//  * @returns {number}
//  */
// function sortAsc(numA, numB) {
//     return numA - numB;
// }

/**
 * solution 2 -- hashmap
 * time: O(n + m)
 * space: O(n)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    let nums1Map = new Map();

    for (let num of nums1) {
        const previousCount = nums1Map.get(num) || 0;
        nums1Map.set(num, previousCount + 1);
    }

    let results = [];

    for (let num of nums2) {
        if (nums1Map.get(num)) {
            results.push(num);
            // decrement from nums1Map
            nums1Map.set(num, nums1Map.get(num) - 1);
        }
    }

    return results;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
