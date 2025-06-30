"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} arrays
 * @return {number}
 */
function maxDistance(arrays) {
    let currentMin = arrays[0][0]; // first array min (ASC order)
    let currentMax = arrays[0].at(-1);
    let largestDifference = 0;

    for (let i = 1; i < arrays.length; i++) {
        const currentArray = arrays[i];

        largestDifference = Math.max(
            largestDifference,
            currentArray.at(-1) - currentMin,
            currentMax - currentArray[0],
        );

        currentMin = Math.min(currentMin, currentArray[0]);
        currentMax = Math.max(currentMax, currentArray.at(-1));
    }

    return largestDifference;
}

console.log(
    maxDistance([
        [1, 2, 3],
        [4, 5],
        [1, 2, 3],
    ]),
); // 4
