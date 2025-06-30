"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
    // 0th row
    let result = [1];

    for (let i = 0; i < rowIndex; i++) {
        let nextRow = new Array(result.length + 1).fill(0);

        for (let j = 0; j < result.length; j++) {
            nextRow[j] += result[j];
            nextRow[j + 1] += result[j];
        }

        // update result
        result = nextRow;
    }

    return result;
}
