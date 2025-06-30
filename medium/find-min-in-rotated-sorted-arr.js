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
    let left = 0;
    let right = nums.length - 1;
    let min = nums[0];

    while (left <= right) {
        // this segment of the array is sorted
        if (nums[left] < nums[right]) {
            // possible update to min
            min = Math.min(min, nums[left]);

            break;
        }

        // if not, do binary search on rotated list
        const middle = left + Math.floor((right - left) / 2);
        const middleValue = nums[middle];
        // possible update to min
        min = Math.min(min, middleValue);

        if (middleValue >= nums[left]) {
            // disregard middle and all values to the left -- they are in the larger rotated portion of the list
            // search smaller values portion
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return min;
}

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([11, 13, 15, 17])); // 11
