"use strict";

// /**
//  * solution 1
//  * time: O(n^2) -- array.shift() and isSortedAsc func called during loop
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// function check(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         // shift off front and add to back of arr
//         const top = nums.shift();
//         nums.push(top);

//         if (isSortedAsc(nums)) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(check([3,4,5,1,2])); // true
// console.log(check([2,1,3,4])); // false
// console.log(check([1,2,3])); // true

// /**
//  * @param {number[]} nums 
//  * @returns {boolean}
//  */
// function isSortedAsc(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         const currentNum = nums[i];
//         const nextNum = nums[i + 1];

//         if (currentNum > nextNum) return false;
//     }

//     return true;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
    const n = nums.length;
    let count = 1;
    
    if (n === 1) return true;

    for (let i = 0; i < 2 * n; i++) {
        if (nums[(i - 1) % n] <= nums[i % n]) {
            count++;
        } else {
            count = 1;
        }

        if (count === n) {
            return true;
        }
    }

    return false;
}

console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([2, 1, 3, 4])); // false
console.log(check([1, 2, 3])); // true
