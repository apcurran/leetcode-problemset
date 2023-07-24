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
    let minNum = nums[0];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // already sorted array, no rotation
        if (nums[left] < nums[right]) {
            minNum = Math.min(minNum, nums[left]);

            break;
        }

        const middle = left + Math.floor((right - left) / 2);
        const value = nums[middle];
        minNum = Math.min(minNum, value);

        if (value >= nums[left]) {
            // search right
            left = middle + 1;
        } else {
            // search left
            right = middle - 1;
        }
    }

    return minNum;
}

console.log( findMin([3, 4, 5, 1, 2]) ); // 1
console.log( findMin([11, 13, 15, 17]) ); // 11
