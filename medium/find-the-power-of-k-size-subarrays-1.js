"use strict";

/**
 * solution 1 -- brute force
 * n = nums length
 * m = chunk length
 * time: O(n * (m * log m))
 * space: O(n + m)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function resultsArray(nums, k) {
    let maxPowers = new Array(nums.length - k + 1).fill(-1);
    // iterate nums
    for (let i = 0; i < nums.length - k + 1; i++) {
        // check k size chunk
        const chunk = nums.slice(i, i + k);
        // if elements are consecutive and sorted ASC
        if (isConsecutive(chunk) && isSortedAsc(chunk)) {
            // get max value
            const maxValue = Math.max(...chunk);
            // record max in results array
            maxPowers[i] = maxValue;
        }
    }
    // return results
    return maxPowers;
}

/**
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isConsecutive(arr) {
    let previousValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i];

        if (currentValue !== previousValue + 1) {
            return false;
        }

        previousValue = currentValue;
    }

    return true;
}

/**
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isSortedAsc(arr) {
    const sortedArr = arr.toSorted(function sortedAsc(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        const originalArrValue = arr[i];
        const sortedArrValue = sortedArr[i];

        if (originalArrValue !== sortedArrValue) {
            return false;
        }
    }

    return true;
}

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)); // [3,4,-1,-1,-1]
console.log(resultsArray([2, 2, 2, 2, 2], 4)); // [-1,-1]
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2)); // [-1,3,-1,3,-1]
