"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function kthSmallestPrimeFraction(arr, k) {
    let possibilities = [];

    // generate all possibilities
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const fractionValue = arr[i] / arr[j];
            const combo = [arr[i], arr[j]];
            possibilities.push([fractionValue, combo]);
        }
    }

    // sort possibilities in ASC order
    possibilities.sort(function sortAsc(tupleA, tupleB) {
        return tupleA[0] - tupleB[0];
    });
    
    // get kth (1-indexed) value of possibilities
    return possibilities[k - 1][1];
    // return max value associated array combo
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3)); // [2, 5]
