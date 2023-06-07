"use strict";

/**
 * solution 1
 * n = matrix rows
 * m = matrix columns
 * time: O(n * m + n * log n)
 * space: O(n)
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(matrix, k) {
    // get array of soldier counts from each row
    let soldierCountsFromRows = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let soldierCountOfRow = 0;

        for (let value of row) {
            // reached the end of the soliders for this row
            if (value === 0) break;

            soldierCountOfRow++;
        }

        soldierCountsFromRows.push([soldierCountOfRow, i]);
    }

    return soldierCountsFromRows
            .sort((a, b) => {
                const array1SoldierCountOfRow = a[0];
                const array2SoldierCountOfRow = b[0];

                return array1SoldierCountOfRow - array2SoldierCountOfRow;
            })
            .slice(0, k)
            .map((tuple) => tuple[1]);
}

console.log(kWeakestRows(
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]],
    3
)); // [2,0,3]
