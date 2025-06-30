"use strict";

/**
 * solution 1
 * time: O(n * log n) -- Array.prototype.sort() calls
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubsequence(nums, k) {
    let valuesWithIndexes = [];

    for (let i = 0; i < nums.length; i++) {
        // store [index, value] for each num
        valuesWithIndexes.push([i, nums[i]]);
    }

    // sort values
    valuesWithIndexes.sort(function sortByValueDesc(tupleA, tupleB) {
        return tupleB[1] - tupleA[1];
    });

    // get first k values from array
    const kValues = valuesWithIndexes.slice(0, k);
    // now sort k values arr by index (ASC)
    kValues.sort(function sortByIndexAsc(tupleA, tupleB) {
        return tupleA[0] - tupleB[0];
    });
    // get only values returned
    return kValues.map(function getValuesFromTuples(tuple) {
        return tuple[1];
    });
}

console.log(maxSubsequence([2, 1, 3, 3], 2)); // [3, 3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // [-1, 3, 4]
