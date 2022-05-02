"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
function validMountainArray(arr) {
    let isIncreasing = false;
    let isDecreasing = false;

    // iterate until the second to last elem in arr
    for (let i = 0; i < arr.length - 1; i++) {
        const currNum = arr[i];
        const nextNum = arr[i + 1];

        // no dups allowed
        if (currNum === nextNum) return false;

        if (currNum < nextNum) {
            // strictly increasing
            isIncreasing = true;

            if (isDecreasing) return false;
        } else {
            // strictly decreasing
            isDecreasing = true;

            if (!isIncreasing) return false;
        }
    }

    return isIncreasing && isDecreasing;
}

console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
