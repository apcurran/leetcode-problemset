"use strict";

/**
 * solution 1 -- binary search
 * time: O(log n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        const currentElement = nums[middle];
        const leftNeighbor = nums[middle - 1];
        const rightNeighbor = nums[middle + 1];

        // if no left neighbor (first elem) OR current elem is diff from left neighbor
        if (middle - 1 < 0 || currentElement !== leftNeighbor) {
            // if no right neighbor (end of the list) OR current elem is diff from right neighbor
            if (middle + 1 === nums.length || currentElement !== rightNeighbor) {
                return nums[middle];
            }
        }

        // otherwise this elem is a duplicate
        const sizeOfLeftHalf = leftNeighbor === currentElement ? middle - 1 : middle;

        if (sizeOfLeftHalf % 2 === 1) {
            // left half is odd length,
            // odd length half always contains the non-duplicate elem,
            // so search the left half
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
