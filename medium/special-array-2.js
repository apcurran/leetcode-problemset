"use strict";

// /**
//  * solution 1 -- brute force (TLE on the last test!)
//  * n = nums length
//  * m = queries length
//  * b = badIndices length
//  * time: O(n + (m * b))
//  * space: O(n) -- excluding results
//  * 
//  * @param {number[]} nums
//  * @param {number[][]} queries
//  * @return {boolean[]}
//  */
// function isArraySpecial(nums, queries) {
//     let badIndices = [];

//     for (let i = 0; i < nums.length - 1; i++) {
//         // if both nums are even OR
//         // both nums are odd (no differing parity)
//         if ((nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) || (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0)) {
//             badIndices.push(i);
//         }
//     }

//     let results = [];

//     for (let [queryStart, queryEnd] of queries) {
//         let found = false;
        
//         for (let index of badIndices) {
//             if (index >= queryEnd) {
//                 results.push(true);
//                 found = true;

//                 break;
//             }

//             if (index < queryEnd && index >= queryStart) {
//                 results.push(false);
//                 found = true;

//                 break;
//             }
//         }

//         if (!found) results.push(true);
//     }

//     return results;
// }

/**
 * solution 2 -- binary search
 * n = nums length
 * m = queries length
 * time: O(n + m * log m)
 * space: O(n) -- excluding results
 * 
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function isArraySpecial(nums, queries) {
    let badIndices = [];

    for (let i = 1; i < nums.length; i++) {
        // if both nums are even OR
        // both nums are odd (no differing parity)
        if (nums[i] % 2 === nums[i - 1] % 2) {
            badIndices.push(i);
        }
    }

    let results = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const [queryStart, queryEnd] = queries[i];
        const foundViolatingIndex = binarySearch(queryStart + 1, queryEnd, badIndices);

        if (foundViolatingIndex) {
            results[i] = false;
        } else {
            results[i] = true;
        }
    }

    return results;
}

/**
 * @param {number} start 
 * @param {number} end 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function binarySearch(start, end, arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const violatingIndex = arr[mid];

        if (violatingIndex < start) {
            left = mid + 1;
        } else if (violatingIndex > end) {
            right = mid - 1;
        } else {
            return true;
        }
    }

    return false;
}

console.log(isArraySpecial([4,3,1,6], [[0,2],[2,3]])); // [false, true]
