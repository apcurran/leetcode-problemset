"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} matrix
 * @return {number}
 */
function diagonalSum(matrix) {
    let j = matrix[0].length - 1;
    let totalSum = 0;

    for (let i = 0; i < matrix.length; i++, j--) {
        const primaryDiagonal = matrix[i][i];
        const secondaryDiagonal = matrix[i][j];
        totalSum += primaryDiagonal;
        
        // skip adding numbers from the same middle diagonal position
        if (i !== j) {
            totalSum += secondaryDiagonal;
        }
    }

    return totalSum;
}

const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log( diagonalSum(mat) ); // 25
