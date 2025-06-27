"use strict";

/**
 * Given an integer array -- nums,
 * return true if any value appears at least twice in the array.
 * Return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const removedDupsArr = [...new Set(nums)];

    return removedDupsArr.length !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
