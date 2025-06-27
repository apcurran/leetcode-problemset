"use strict";

// /**
//  * solution 1 -- iterative (brute-force sol)
//  * n = len of grid rows
//  * m = len of nums in each row
//  * time: O(n * m)
//  * space: O(1)
//  * 
//  * @param {number[][]} grid
//  * @return {number}
//  */
// function countNegatives(grid) {
//     let negativeNumsCount = 0;

//     for (let row of grid) {
//         for (let num of row) {
//             if (num < 0) negativeNumsCount++;
//         }
//     }

//     return negativeNumsCount;
// }

// /**
//  * solution 2 -- iterative (brute-force sol slightly optimized by breaking early)
//  * n = len of grid rows
//  * m = len of nums in each row
//  * time: O(n * m)
//  * space: O(1)
//  * 
//  * @param {number[][]} grid
//  * @return {number}
//  */
// function countNegatives(grid) {
//     let negativeNumsCount = 0;

//     for (let row = 0; row < grid.length; row++) {
//         const gridRow = grid[row];

//         for (let col = 0; col < gridRow.length; col++) {
//             const currNum = gridRow[col];

//             if (currNum < 0) {
//                 // break out of loop and add all left-over len of arr to counter
//                 const rowNegatives = gridRow.length - col;
//                 negativeNumsCount += rowNegatives;

//                 break;
//             }
//         }
//     }

//     return negativeNumsCount;
// }

/**
 * solution 3 -- array flat() and filter() methods
 * n = len of grid rows
 * m = len of nums in each row
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
    return grid
        .flat()
        .filter((num) => num < 0)
        .length;
}

console.log( countNegatives([[4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]]) ); // 8

console.log( countNegatives([[3, 2],
    [1, 0]]) ); // 0

