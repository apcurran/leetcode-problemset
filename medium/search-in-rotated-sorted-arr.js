"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        // found target
        if (target === nums[mid]) return mid;

        // left sorted portion
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                // search left half
                right = mid - 1;
            } else {
                // search right half
                left = mid + 1;
            }
        } else {
            // right sorted portion
            if (nums[mid] <= target && target <= nums[right]) {
                // search right
                left = mid + 1;
            } else {
                // search left
                right = mid - 1;
            }
        }
    }

    // target not found
    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
