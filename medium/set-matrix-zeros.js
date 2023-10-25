"use strict";

/**
 * solution 1 -- hashset
 * time: O(m * n)
 * space: O(m + n)
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    let rowSet = new Set();
    let colSet = new Set();

    // mark rows and columns if they require zeroing out
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                rowSet.add(row);
                colSet.add(col);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (rowSet.has(row) || colSet.has(col)) {
                // zero out specified rows and columns
                matrix[row][col] = 0;
            }
        }
    }
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
// [[1,0,1], [0,0,0], [1,0,1]]
