"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
function pivotArray(nums, pivot) {
    const smallerThanPivotArr = nums.filter((num) => num < pivot);
    const equalToPivotArr = nums.filter((num) => num === pivot);
    const greaterThanPivotArr = nums.filter((num) => num > pivot);

    return [...smallerThanPivotArr, ...equalToPivotArr, ...greaterThanPivotArr];
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9, 5, 3, 10, 10, 12, 14]
console.log(pivotArray([-3, 4, 3, 2], 2)); // [-3, 2, 4, 3]
