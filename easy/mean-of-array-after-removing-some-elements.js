"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n) -- due to array.sort() timsort
 *
 * @param {number[]} arr
 * @return {number}
 */
function trimMean(arr) {
    arr.sort(function sortAsc(a, b) {
        return a - b;
    });
    const fivePercentLength = arr.length * 0.05;
    let remainingNumsSum = 0;

    for (let i = fivePercentLength; i < arr.length - fivePercentLength; i++) {
        remainingNumsSum += arr[i];
    }

    const remainingNumsLength = arr.length - fivePercentLength * 2;

    return remainingNumsSum / remainingNumsLength;
}

console.log(
    trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]),
); // 2
