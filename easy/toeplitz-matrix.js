"use strict";

/**
 * solution 1
 * time: O(m * n)
 * space: O(1)
 * 
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
    // skip first row
    for (let row = 1; row < matrix.length; row++) {
        // skip first column
        for (let column = 1; column < matrix[row].length; column++) {
            const currentCell = matrix[row][column];
            const previousDiagonalCell = matrix[row - 1][column - 1];

            if (currentCell !== previousDiagonalCell) return false;
        }
    }

    return true;
}

console.log( isToeplitzMatrix(
    [
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
    ],
) ); // true
console.log( isToeplitzMatrix(
    [
        [1, 2],
        [2, 2],
    ],
) ); // false
