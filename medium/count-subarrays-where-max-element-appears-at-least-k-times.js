"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarrays(nums, k) {
    const maxElement = getMax(nums);
    let maxElementInWindowCount = 0;
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === maxElement) {
            maxElementInWindowCount++;
        }

        while (k === maxElementInWindowCount) {
            if (nums[left] === maxElement) {
                maxElementInWindowCount--;
            }

            left++;
        }

        result += left;
    }

    return result;
}

console.log(countSubarrays([1, 3, 2, 3, 3], 2)); // 6
console.log(countSubarrays([1, 4, 2, 1], 3)); // 0

/**
 * @param {number[]} arr
 * @returns {number}
 */
function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    return max;
}
