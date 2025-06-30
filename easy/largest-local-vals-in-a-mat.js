"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(n^2)
 *
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
    let resArr = [];

    for (let r = 1; r < grid.length - 1; r++) {
        let resRow = [];
        // For each 3 x 3 window,
        // iterate through the values to get the maximum value within the window.
        for (let c = 1; c < grid[r].length - 1; c++) {
            const localMax = Math.max(
                grid[r - 1][c - 1], // upper-left
                grid[r - 1][c],
                grid[r - 1][c + 1],

                grid[r][c - 1],
                grid[r][c],
                grid[r][c + 1],

                grid[r + 1][c - 1],
                grid[r + 1][c],
                grid[r + 1][c + 1],
            );

            resRow.push(localMax);
        }

        resArr.push(resRow);
    }

    return resArr;
}

console.log(
    largestLocal([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
    ]),
);
