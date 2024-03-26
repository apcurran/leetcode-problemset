"use strict";

/**
 * solution 1 -- iterative
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (row === 0 && col === 0) continue;

            const currentValue = grid[row][col];
            const leftValue = col > 0 ? grid[row][col - 1] : Infinity;
            const leftAccumulation = leftValue + currentValue;
            const topValue = row > 0 ? grid[row - 1][col] : Infinity;
            const topAccumulation = topValue + currentValue;

            const minValue = Math.min(leftAccumulation, topAccumulation);
            grid[row][col] = minValue;
        }
    }

    const lastRow = grid.length - 1;
    const lastCol = grid[0].length - 1;

    return grid[lastRow][lastCol];
}
