"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
    let luckyValues = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const minCellInRow = Math.min(...row);
        const minCellInRowIndex = row.indexOf(minCellInRow);
        const isMinCellInRowMaxInColumn = matrix.every((row) => row[minCellInRowIndex] <= minCellInRow);

        if (isMinCellInRowMaxInColumn) {
            luckyValues.push(minCellInRow);
        }
    }

    return luckyValues;
}

console.log( luckyNumbers(
    [
        [3,   7,  8],
        [9,  11, 13],
        [15, 16, 17],
    ],
) ); // [15]
