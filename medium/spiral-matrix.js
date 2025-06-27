"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;
    let results = [];

    while (left < right && top < bottom) {
        // get every i in the top row
        for (let i = left; i < right; i++) {
            results.push(matrix[top][i]);
        }

        top++;

        // get every i in the right column
        for (let i = top; i < bottom; i++) {
            results.push(matrix[i][right - 1]);
        }

        right--;

        // early exit
        if (!(left < right && top < bottom)) {
            break;
        }

        // get every i in the bottom row
        for (let i = right - 1; i >= left; i--) {
            results.push(matrix[bottom - 1][i]);
        }

        bottom--;

        // get every i in the left column
        for (let i = bottom - 1; i >= top; i--) {
            results.push(matrix[i][left]);
        }

        left++;
    }

    return results;
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
