"use strict";

/**
 * solution 1 -- hashset cache
 * n = grid length
 * time: O(n^2) -- iterate through all grid values
 * space: O(n^2) -- hashset will hold all grid values
 *
 * @param {number[][]} grid
 * @return {[number, number]} [repeatedNum, missingNum]
 */
function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    let seenNums = new Set();
    let repeatedNum = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const currentNum = grid[row][col];

            // record repeatedNum, but keep going to visit all nums for seenNums Set
            if (seenNums.has(currentNum)) repeatedNum = currentNum;

            seenNums.add(currentNum);
        }
    }

    let missingNum = 0;

    for (let num = 1; num <= n * n; num++) {
        if (!seenNums.has(num)) {
            missingNum = num;

            break;
        }
    }

    return [repeatedNum, missingNum];
}

console.log(
    findMissingAndRepeatedValues([
        [1, 3],
        [2, 2],
    ]),
); // [2, 4]
console.log(
    findMissingAndRepeatedValues([
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
    ]),
); // [9, 5]
