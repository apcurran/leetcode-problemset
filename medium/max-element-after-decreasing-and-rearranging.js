"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {number}
 */
function maximumElementAfterDecrementingAndRearranging(arr) {
    arr.sort((a, b) => a - b);

    let previous = 0;

    for (let num of arr) {
        previous = Math.min(previous + 1, num);
    }

    return previous;
}

console.log(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1])); // 2
