"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- String() calls within loop
 *
 * @param {number[]} nums
 * @return {number}
 */
function findTheArrayConcVal(nums) {
    let left = 0;
    let right = nums.length - 1;
    let concatValue = 0;

    while (left < right) {
        const leftValue = String(nums[left]);
        const rightValue = String(nums[right]);
        const leftRightConcatValue = Number(leftValue + rightValue);
        concatValue += leftRightConcatValue;

        // move pointers
        left++;
        right--;
    }

    if (left === right) {
        concatValue += nums[left];
    }

    return concatValue;
}

console.log(findTheArrayConcVal([7, 52, 2, 4])); // 596
console.log(findTheArrayConcVal([5, 14, 13, 8, 12])); // 673
