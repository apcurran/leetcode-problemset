"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function smallestEqual(nums) {
    for (let i = 0; i < nums.length; i++) {
        const modVal = i % 10;
        const currNum = nums[i];

        if (modVal === currNum) return i;
    }

    return -1;
}

console.log(smallestEqual([0, 1, 2])); // 0
console.log(smallestEqual([4, 3, 2, 1])); // 2
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -1
console.log(
    smallestEqual([
        7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6,
    ]),
); // 21
