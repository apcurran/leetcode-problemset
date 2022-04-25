"use strict";

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    // 2D-arr of rows and cols
    let visitedSquares = [];
    let maxIsland = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            maxIsland = Math.max(maxIsland, calcIslandArea(row, col, grid, visitedSquares));
        }
    }
}

/**
 * @param {number} row 
 * @param {number} col 
 * @param {number[][]} grid
 * @param {boolean[][]} visitedSquares
 * @returns {number} - area of grid cells connected island
 */
function calcIslandArea(row, col, grid, visitedSquares) {
    if (row < 0 ||
        row >= grid.length ||
        col >= grid.length ||
        visitedSquares[row][col] === true ||
        grid[row][col] === 0) {
        return 0;
    }

    // toggle square to true after visiting
    visitedSquares[row][col] = true;

    return (1 +
            calcIslandArea(row + 1, col, grid, visitedSquares) +
            calcIslandArea(row - 1, col, grid, visitedSquares) +
            calcIslandArea(row, col - 1, grid, visitedSquares) +
            calcIslandArea(row, col + 1, grid, visitedSquares));
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
              [0,0,0,0,0,0,0,1,1,1,0,0,0],
              [0,1,1,0,1,0,0,0,0,0,0,0,0],
              [0,1,0,0,1,1,0,0,1,0,1,0,0],
              [0,1,0,0,1,1,0,0,1,1,1,0,0],
              [0,0,0,0,0,0,0,0,0,0,1,0,0],
              [0,0,0,0,0,0,0,1,1,1,0,0,0],
              [0,0,0,0,0,0,0,1,1,0,0,0,0]];

console.log( maxAreaOfIsland(grid) ); // 6
