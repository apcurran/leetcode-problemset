"use strict";

/**
 * solution 1
 * time: O(r * c)
 * space: O(r * c)
 * 
 * @param {number[][]} grid
 * @return {number[][]}
 */
function onesMinusZeros(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let rowOnes = new Array(ROWS).fill(0);
    let colOnes = new Array(COLS).fill(0);

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            // count ones in each row
            rowOnes[row] += grid[row][col];
            // count ones in each col
            colOnes[col] += grid[row][col];
        }
    }

    // create a diff matrix with the same amount of rows and columns as the original grid
    let diffMatrix = Array.from({ length: ROWS }, function createPlaceholderCols() {
        return new Array(COLS).fill(0);
    });

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            diffMatrix[row][col] = rowOnes[row] + colOnes[col] - (ROWS - rowOnes[row]) - (COLS - colOnes[col]);
        }
    }

    return diffMatrix;
}

console.log(onesMinusZeros([[0,1,1], [1,0,1], [0,0,1]]));
// [[0,0,4],[0,0,4],[-2,-2,2]]
