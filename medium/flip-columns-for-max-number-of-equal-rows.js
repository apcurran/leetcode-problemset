"use strict";

/**
 * solution 1 -- hashmap
 * n = rows length
 * m = columns length
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {number[][]} matrix
 * @return {number}
 */
function maxEqualRowsAfterFlips(matrix) {
    let countsMap = new Map();

    for (let row of matrix) {
        let key = "";

        for (let col = 0; col < row.length; col++) {
            const current = row[col] === row[0] ? "1" : "0";
            key += current;
        }

        const previousKeyCount = countsMap.get(key) || 0;
        // update key count
        countsMap.set(key, previousKeyCount + 1);
    }

    let max = 0;

    // iterate map tuples
    for (let countTuple of countsMap) {
        max = Math.max(max, countTuple[1]);
    }

    return max;
}

console.log(
    maxEqualRowsAfterFlips([
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 0],
    ]),
); // 2
