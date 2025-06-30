"use strict";

// /**
//  * solution 1 -- hashmap
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// function divideArray(nums) {
//     if (nums.length % 2 !== 0) return false;

//     let numCounts = new Map();

//     for (let num of nums) {
//         const prevCount = numCounts.get(num) || 0;
//         numCounts.set(num, prevCount + 1);
//     }

//     // // iterate cache and check if occurences val is even
//     for (let [, numCount] of numCounts) {
//         if (numCount % 2 !== 0) {
//             // odd count -> can't make all even pairs!
//             return false;
//         }
//     }

//     return true;
// }

/**
 * solution 2 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function divideArray(nums) {
    if (nums.length % 2 !== 0) return false;

    let seenNums = new Set();

    for (let num of nums) {
        if (seenNums.has(num)) {
            seenNums.delete(num);
        } else {
            seenNums.add(num);
        }
    }

    // should have empty seenNums if all pairs were matched during loop
    return seenNums.size === 0;
}

// /**
//  * solution 3 -- sorting
//  * time: O(n * log n) -- array.sort()
//  * space: O(n) -- array.sort() uses linear space
//  *
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// function divideArray(nums) {
//     if (nums.length % 2 !== 0) return false;

//     nums.sort(function sortAsc(a, b) {
//         return a - b;
//     });

//     for (let i = 0; i < nums.length - 1; i += 2) {
//         const currentNum = nums[i];
//         const nextNum = nums[i + 1];

//         if (currentNum !== nextNum) {
//             // pair does NOT match,
//             // return false early
//             return false;
//         }
//     }

//     return true;
// }

console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false
