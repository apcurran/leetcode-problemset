"use strict";

// /**
//  * solution 1 -- recursion and hashset cache
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function minimumOperations(nums, count = 0) {
//     if (isDistinct(nums)) {
//         return count;
//     }

//     // otherwise, remove first 3 elems
//     const chunk = nums.slice(3);

//     return minimumOperations(chunk, count + 1);
// }

// /**
//  * @param {number[]} arr 
//  * @returns {boolean}
//  */
// function isDistinct(arr) {
//     let seenNums = new Set();

//     for (let num of arr) {
//         if (seenNums.has(num)) {
//             return false;
//         }

//         seenNums.add(num);
//     }

//     return true;
// }

/**
 * solution 2 -- iterative, slightly optimized for time and memory (no change to big-O though)
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
    let counter = 0;

    for (let i = 0; i < nums.length; i += 3) {
        if (isDistinct(nums, i)) {
            break;
        } else {
            counter++;
        }
    }

    return counter;
}

/**
 * @param {number[]} arr 
 * @param {number} startIndex
 * @returns {boolean}
 */
function isDistinct(arr, startIndex) {
    let seenNums = new Set();

    for (let i = startIndex; i < arr.length; i++) {
        if (seenNums.has(arr[i])) {
            return false;
        }

        seenNums.add(arr[i]);
    }

    return true;
}

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])); // 2
console.log(minimumOperations([4, 5, 6, 4, 4])); // 2
console.log(minimumOperations([6, 7, 8, 9])); // 0
