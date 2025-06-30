"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let results = [];

    for (let col = 0; col < COLS; col++) {
        let current = [];

        for (let row = 0; row < ROWS; row++) {
            const transposed = matrix[row][col];
            current.push(transposed);
        }

        results.push(current);
    }

    return results;
}

console.log(
    transpose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
);
// [[1,4,7], [2,5,8], [3,6,9]]
