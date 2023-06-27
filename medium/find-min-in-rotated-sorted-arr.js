"use strict";

// /**
//  * solution 1 -- correct, but too slow
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function findMin(nums) {
//     let minNum = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         const currNum = nums[i];

//         if (currNum < minNum) {
//             // update minNum
//             minNum = currNum;
//         }
//     }

//     return minNum;
// }

/**
 * solution 2
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    // binary search
    let res = nums[0];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // we are within a sorted portion
        if (nums[left] < nums[right]) {
            res = Math.min(res, nums[left]);

            break;
        }

        const middle = left + Math.floor((right - left) / 2);
        const value = nums[middle];
        res = Math.min(res, value);

        if (value >= nums[left]) {
            // search right
            left = middle + 1;
        } else {
            // search left
            right = middle - 1;
        }
    }

    return res;
}

console.log( findMin([3, 4, 5, 1, 2]) ); // 1
console.log( findMin([11, 13, 15, 17]) ); // 11
