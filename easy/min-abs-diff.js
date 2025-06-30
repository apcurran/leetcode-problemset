"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
    // sort arr ASC
    arr = arr.sort((a, b) => a - b);
    // take first two nums (min nums)
    // find the Abs(diff) of both nums
    let minDiff = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];
        const currentDiff = nextNum - currentNum;

        minDiff = Math.min(minDiff, currentDiff);
    }
    // iterate through sorted arr, checking for pairs equal to diff
    let results = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];
        const currentDiff = Math.abs(nextNum - currentNum);

        if (currentDiff === minDiff) {
            results.push([currentNum, nextNum]);
        }
    }

    return results;
}

console.log(minimumAbsDifference([4, 2, 1, 3])); // [[1,2], [2,3], [3,4]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // [[-14,-10], [19,23], [23,27]]
