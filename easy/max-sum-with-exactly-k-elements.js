"use strict";

// /**
//  * solution 1
//  * n = nums length
//  * time: O(n * log n + k)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function maximizeSum(nums, k) {
//     // asc order
//     nums = nums.sort((a, b) => a - b);
//     let maxScore = 0;

//     // iterate k times
//     for (let i = 0; i < k; i++) {
//         // get largest elem -- m
//         const largestElem = nums[nums.length - 1];
//         maxScore += largestElem;
//         // add largest elem + 1 to replace m
//         const updatedLargestElem = largestElem + 1;
//         nums[nums.length - 1] = updatedLargestElem;
//     }

//     return maxScore;
// }

/**
 * solution 2
 * n = nums length
 * time: O(n + k)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
    const largestElemIndex = getLargestElemIndex(nums);
    let largestElem = nums[largestElemIndex];
    let maxScore = 0;

    // iterate k times
    for (let i = 0; i < k; i++) {
        // get largest elem -- m
        maxScore += largestElem;
        // add largest elem + 1 to replace m
        const updatedLargestElem = largestElem + 1;
        largestElem = updatedLargestElem;
    }

    return maxScore;
}

/**
 * @param {number[]} arr
 * @returns {number} index of largest elem
 */
function getLargestElemIndex(arr) {
    let largestValue = arr[0];
    let largestElemIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];

        if (currentValue > largestValue) {
            largestValue = currentValue;
            largestElemIndex = i;
        }
    }

    return largestElemIndex;
}

console.log(maximizeSum([1, 2, 3, 4, 5], 3)); // 18
console.log(maximizeSum([5, 5, 5], 2)); // 11
