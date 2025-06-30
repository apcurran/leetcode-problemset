"use strict";

// /**
//  * solution 1 -- brute force
//  * n = nums length
//  * k = chunk length
//  * time: O(n * k)
//  * space: O(n + k)
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function resultsArray(nums, k) {
//     let maxPowers = new Array(nums.length - k + 1).fill(-1);
//     // iterate nums
//     for (let i = 0; i < nums.length - k + 1; i++) {
//         // check k size chunk
//         const chunk = nums.slice(i, i + k);
//         // if elements are consecutive and sorted ASC
//         if (isConsecutive(chunk)) {
//             // get max value
//             const maxValue = Math.max(...chunk);
//             // record max in results array
//             maxPowers[i] = maxValue;
//         }
//     }
//     // return results
//     return maxPowers;
// }

// /**
//  * @param {number[]} arr
//  * @returns {boolean}
//  */
// function isConsecutive(arr) {
//     let previousValue = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         const currentValue = arr[i];

//         if (currentValue !== previousValue + 1) {
//             return false;
//         }

//         previousValue = currentValue;
//     }

//     return true;
// }

/**
 * solution 2 -- sliding window
 * n = nums length
 * k = chunk length
 * time: O(n)
 * space: O(n) -- including results array
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function resultsArray(nums, k) {
    let results = [];
    let left = 0;
    let consecutivesCount = 1; // never drops below 1

    for (let right = 0; right < nums.length; right++) {
        if (right > 0 && nums[right - 1] + 1 === nums[right]) {
            consecutivesCount++;
        }

        if (right - left + 1 > k) {
            if (nums[left] + 1 === nums[left + 1]) {
                consecutivesCount--;
            }

            left++;
        }

        if (right - left + 1 === k) {
            if (consecutivesCount === k) {
                results.push(nums[right]);
            } else {
                results.push(-1);
            }
        }
    }

    return results;
}

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)); // [3,4,-1,-1,-1]
console.log(resultsArray([2, 2, 2, 2, 2], 4)); // [-1,-1]
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2)); // [-1,3,-1,3,-1]
