"use strict";

// /**
//  * solution 1 -- nested loops (time-limit exceeded)
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// function containsNearbyDuplicate(nums, k) {
//     // iterate arr
//     for (let i = 0; i < nums.length; i++) {
//         const outerNum = nums[i];

//         // iterate arr again
//         for (let j = 0; j < nums.length; j++) {
//             // make sure diff indices
//             if (i === j) continue;

//             const innerNum = nums[j];
//             // check if currNum === outerNum
//             if (outerNum !== innerNum) continue;
//             // if so, then check if absolute val(outerNums index - currNum's index) is <= k
//             const indicesDiff = Math.abs(i - j);

//             if (indicesDiff <= k) return true;
//         }
//     }

//     return false;
// }

/**
 * solution 2 -- cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const indicesDiff = map.get(current) - i;
        const isLessThanK = Math.abs(indicesDiff) <= k;

        if (map.has(current) && isLessThanK) {
            return true;
        } else {
            map.set(current, i);
        }
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
