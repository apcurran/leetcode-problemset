"use strict";

/**
 * solution 1
 * time: O(n log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function targetIndices(nums, target) {
    let targetIdxArr = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];

        if (currNum === target) {
            targetIdxArr.push(i);
        }
    }

    return targetIdxArr;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1, 2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
