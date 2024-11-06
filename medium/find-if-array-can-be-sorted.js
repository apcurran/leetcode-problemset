"use strict";

/**
 * solution 1 -- bubble sort implementation
 * n = nums length
 * m = num bits length
 * time: O(n^2)
 * space: O(m)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function canSortArray(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] <= nums[j + 1]) {
                // no swap
                continue;
            } else {
                // same number of setbits for each value
                if (getSetBitsCount(nums[j]) === getSetBitsCount(nums[j + 1])) {
                    // swap values
                    const tempNumA = nums[j];
                    const tempNumB = nums[j + 1];
                    nums[j + 1] = tempNumA;
                    nums[j] = tempNumB;
                } else {
                    return false;
                }
            }
        }
    }

    return true;
}

/**
 * @param {number} num 
 * @returns {number}
 */
function getSetBitsCount(num) {
    const binStr = num.toString(2);
    let count = 0;

    for (let bit of binStr) {
        if (bit === "1") count++;
    }

    return count;
}

console.log(canSortArray([8, 4, 2, 30, 15])); // true
console.log(canSortArray([3, 16, 8, 4, 2])); // false
