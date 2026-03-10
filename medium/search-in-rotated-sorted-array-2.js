"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {boolean}
//  */
// function search(nums, target) {
//     return nums.includes(target);
// }

/**
 * solution 2 -- binary search
 * time: O(log n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // otherwise, keep looking
        if (nums[left] < nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[left] > nums[mid]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            left++;
        }
    }

    return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false
