"use strict";

/**
 * solution 1
 * time: O(m * n)
 * space: O(m * n)
 * 
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(m, n, indices) {
    let matrix = [];
    let oddValueCellsCount = 0;

    for (let row = 0; row < m; row++) {
        let column = [];

        for (let col = 0; col < n; col++) {
            column.push(0);
        }

        matrix.push(column);
    }

    // matrix initialized with 0s
    for (let i = 0; i < indices.length; i++) {
        const [rowI, colI] = indices[i];

        for (let col = 0; col < n; col++) {
            matrix[rowI][col]++;

            // cell is odd
            if (matrix[rowI][col] % 2 === 1) {
                oddValueCellsCount++;
            } else {
                oddValueCellsCount--;
            }
        }

        for (let row = 0; row < m; row++) {
            matrix[row][colI]++;

            // cell is odd
            if (matrix[row][colI] % 2 === 1) {
                oddValueCellsCount++;
            } else {
                oddValueCellsCount--;
            }
        }
    }
    
    return oddValueCellsCount;
}

console.log(oddCells(2, 3, [[0,1],[1,1]])); // 6
