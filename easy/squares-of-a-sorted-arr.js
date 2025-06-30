"use strict";

// /**
//  * solution 1
//  * time: O(n * log n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortedSquares(nums) {
//     return nums
//             .map((num) => num ** 2)
//             .sort((a, b) => a - b);
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1) -- not including results array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    let results = [];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const leftValueSquared = nums[left] ** 2;
        const rightValueSquared = nums[right] ** 2;

        if (leftValueSquared > rightValueSquared) {
            // add left squared value
            results.push(leftValueSquared);
            // move left pointer
            left++;
        } else {
            // add right squared value
            results.push(rightValueSquared);
            // move right pointer
            right--;
        }
    }

    return results.reverse();
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
