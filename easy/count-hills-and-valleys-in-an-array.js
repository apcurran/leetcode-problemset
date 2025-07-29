"use strict";

/**
 * solution 1 -- nested loops
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function countHillValley(nums) {
    let counter = 0;

    // iterate through each num in nums (skipping first and last which can never work)
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) {
            // skip duplicates
            continue;
        }

        let left = 0;

        // find the nearest unequal left neighbor
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] > nums[i]) {
                // left neighbor value is greater, so signifiy this relationship
                // with a 1
                left = 1;

                break;
            } else if (nums[j] < nums[i]) {
                // else if neighbor value is smaller, signify
                // with a -1
                left = -1;

                break;
            }
        }

        let right = 0;

        // find the nearest unequal right neighbor
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                right = 1;

                break;
            } else if (nums[j] < nums[i]) {
                right = -1;

                break;
            }
        }

        if (left === right && left !== 0) {
            counter++;
        }
    }

    return counter;
}

console.log(countHillValley([2, 4, 1, 1, 6, 5])); // 3
console.log(countHillValley([6, 6, 5, 5, 4, 1])); // 0
