"use strict";

// /**
//  * m = num of cells in grid
//  * solution 1 -- if O(m) space was allowed
//  * time: O(m) 
//  * space: O(m)
//  * 
//  * @param {number[][]} matrix
//  * @return {number[][]} Do not return anything, modify matrix in-place instead.
//  */
// function rotate(matrix) {
//     // if creating an arr was allowed
//     // what if scen
//     let resArr = [];

//     for (let i = 0; i < matrix.length; i++) {
//         const currRow = matrix[i];
//         let newRow = [];

//         for (let j = 0; j < currRow.length; j++) {
//             const currNum = matrix[j][i];
//             newRow.push(currNum);
//         }

//         const resRow = newRow.reverse();
//         resArr.push(resRow);
//     }

//     return resArr;
// }

/**
 * m = num of cells in grid
 * solution 1
 * time: O(m) 
 * space: O(1)
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    transpose(matrix);
    reflect(matrix);
}

/**
 * @param {number[][]} matrix
 * @returns {void}
 */
function transpose(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
}

/**
 * @param {number[][]} matrix 
 * @returns {void}
 */
function reflect(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = temp;
        }
    }
}

console.log( rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) ); // [[7,4,1],[8,5,2],[9,6,3]]
// console.log( rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]) ); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
