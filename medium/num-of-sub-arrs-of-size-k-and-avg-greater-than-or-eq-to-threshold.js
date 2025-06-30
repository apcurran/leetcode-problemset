"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} arr
//  * @param {number} k
//  * @param {number} threshold
//  * @return {number}
//  */
// function numOfSubarrays(arr, k, threshold) {
//     let subArraysCount = 0;

//     for (let i = 0; i <= arr.length - k; i++) {
//         const currentNum = arr[i];
//         let sum = currentNum;

//         for (let j = i + 1; j < i + k; j++) {
//             const innerNum = arr[j];
//             sum += innerNum;
//         }

//         const avg = sum / k;

//         if (avg >= threshold) subArraysCount++;
//     }

//     return subArraysCount;
// }

/**
 * solution 2 -- sliding window technique
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
    let subArraysCount = 0;
    let currentSum = 0;

    // initialize currentSum with first sum grouping
    for (let i = 0; i < k - 1; i++) {
        currentSum += arr[i];
    }

    for (let left = 0; left <= arr.length - k; left++) {
        const leftPointerValue = arr[left];
        const rightPointerValue = arr[left + k - 1];
        currentSum += rightPointerValue;

        const avg = currentSum / k;

        if (avg >= threshold) {
            subArraysCount++;
        }

        currentSum -= leftPointerValue;
    }

    return subArraysCount;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 6
