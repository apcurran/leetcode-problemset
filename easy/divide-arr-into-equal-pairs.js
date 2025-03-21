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

    let numCounts = new Map();

    for (let num of nums) {
        const prevCount = numCounts.get(num) || 0;
        numCounts.set(num, prevCount + 1);
    }

    // // iterate cache and check if occurences val is even
    for (let [, numCount] of numCounts) {
        if (numCount % 2 !== 0) {
            // odd count -> can't make all even pairs!
            return false;
        }
    }

    return true;
}

console.log( divideArray([3, 2, 3, 2, 2, 2]) ); // true
console.log( divideArray([1, 2, 3, 4]) ); // false
