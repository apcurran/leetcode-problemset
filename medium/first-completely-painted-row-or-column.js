"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n * m)
 * time: O(n + m)
 *
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
function firstCompleteIndex(arr, mat) {
    const ROWS = mat.length;
    const COLS = mat[0].length;
    let matrixToPosition = new Map();

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            matrixToPosition.set(mat[row][col], [row, col]); // map cell value to [row, col] tuple
        }
    }

    let rowCount = new Array(ROWS).fill(0);
    let colCount = new Array(COLS).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const [row, col] = matrixToPosition.get(arr[i]);
        rowCount[row]++; // increment count at index - row
        colCount[col]++; // increment count at index - col

        // if fully filled row OR col, return index
        if (colCount[col] === ROWS || rowCount[row] === COLS) {
            return i;
        }
    }

    return -1;
}

console.log(
    firstCompleteIndex(
        [1, 3, 4, 2],
        [
            [1, 4],
            [2, 3],
        ],
    ),
); // 2
