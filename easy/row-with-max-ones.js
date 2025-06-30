"use strict";

/**
 * solution 1
 * n = rows length
 * m = row columns length
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
function rowAndMaximumOnes(matrix) {
    let maxRowIndex = 0;
    let maxRowOnesCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let rowOnesCount = 0;

        for (let j = 0; j < row.length; j++) {
            const column = row[j];

            if (column === 1) {
                rowOnesCount++;
            }
        }

        if (rowOnesCount > maxRowOnesCount) {
            maxRowIndex = i;
            maxRowOnesCount = rowOnesCount;
        }
    }

    return [maxRowIndex, maxRowOnesCount];
}

console.log(
    rowAndMaximumOnes([
        [0, 0, 0],
        [0, 1, 1],
    ]),
); // [1, 2]
console.log(
    rowAndMaximumOnes([
        [0, 0],
        [1, 1],
        [0, 0],
    ]),
); // [1, 2]
console.log(rowAndMaximumOnes([[0], [0]])); // [0, 0]
