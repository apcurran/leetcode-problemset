"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;

    // Stop one elem before end -- to prevent check against next num being undefined
    for (let i = 0; i < nums.length - 1; i++) {
        const currNum = nums[i];
        const nextNum = nums[i + 1];

        if (currNum > nextNum) {
            isIncreasing = false;
        } else if (currNum < nextNum) {
            isDecreasing = false;
        }
    }

    return isIncreasing ? isIncreasing : isDecreasing;
}

console.log( isMonotonic([1, 2, 2, 3]) ); // true
console.log( isMonotonic([6, 5, 4, 4]) ); // true
console.log( isMonotonic([1, 3, 2]) ); // false
