"use strict";

// /**
//  * solution 1
//  * time: O(max(n, m) * log (max(n, m)))
//  * space: O(max(n, m))
//  * 
//  * @param {number[][]} nums1
//  * @param {number[][]} nums2
//  * @return {number[][]}
//  */
// function mergeArrays(nums1, nums2) {
//     let hashmap = new Map();

//     for (let [id, value] of nums1) {
//         hashmap.set(id, value);
//     }

//     for (let [id, value] of nums2) {
//         const previousValue = hashmap.get(id) || 0;
//         hashmap.set(id, value + previousValue);
//     }

//     let results = [];

//     for (let tuple of hashmap) {
//         results.push(tuple);
//     }

//     return results.sort((a, b) => a[0] - b[0]);
// }

/**
 * solution 2 -- merge sort like (two pointers)
 * time: O(n + m))
 * space: O(1) -- not including results array space
 * 
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
    let i = 0;
    let j = 0;
    let results = [];

    // i and j are in bounds
    while (i < nums1.length && j < nums2.length) {
        // if nums1 id is less than nums2 id
        if (nums1[i][0] < nums2[j][0]) {
            results.push(nums1[i]); // add tuple of [id, value] to results
            i++;
        } else if (nums1[i][0] > nums2[j][0]) {
            results.push(nums2[j]); // add tuple of [id, value] to results
            j++;
        } else {
            // equal id, sum values
            const id = nums1[i][0]; // either nums1 or nums2 id would work, they are the same
            const valuesSum = nums1[i][1] + nums2[j][1];
            results.push([id, valuesSum]);
            // move pointers forward
            i++;
            j++;
        }
    }

    // check for leftovers from nums1
    while (i < nums1.length) {
        // add every leftover tuple to results
        results.push(nums1[i]);
        // move i pointer forward
        i++;
    }

    // check for leftovers from nums2
    while (j < nums2.length) {
        // add every leftover tuple to results
        results.push(nums2[j]);
        // move i pointer forward
        j++;
    }

    return results;
}

console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]));
// [[1,6],[2,3],[3,2],[4,6]]
