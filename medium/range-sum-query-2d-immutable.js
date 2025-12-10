// /**
//  * @param {number[][]} matrix
//  */
// var NumMatrix = function (matrix) {
//     this.matrix = matrix;
// };

// /**
//  * solution 1 -- brute force (passes, but not O(1) time constraint)
//  * m = matrix rows
//  * n = matrix columns
//  * time: O(m * n)
//  * space: O(1)
//  *
//  * @param {number} row1
//  * @param {number} col1
//  * @param {number} row2
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
//     let sum = 0;

//     // start at first row and continue until second row
//     for (let row = row1; row <= row2; row++) {
//         // start at first column and continue until second column
//         for (let col = col1; col <= col2; col++) {
//             sum += this.matrix[row][col];
//         }
//     }

//     return sum;
// };

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.prefixSum = Array.from({ length: matrix.length }, function generateRowsWithZeros() {
        return Array(matrix[0].length).fill(0);
    });

    for (let row = 0; row < matrix.length; row++) {
        this.prefixSum[row][0] = matrix[row][0];

        for (let col = 1; col < matrix[0].length; col++) {
            this.prefixSum[row][col] = this.prefixSum[row][col - 1] + matrix[row][col];
        }
    }
};

/**
 * solution 2 -- one dimensional prefix sum
 * m = matrix rows
 * n = matrix columns
 * time: O(m)
 * space: O(m * n) -- full matrix size
 *
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0;

    for (let row = row1; row <= row2; row++) {
        if (col1 > 0) {
            sum += this.prefixSum[row][col2] - this.prefixSum[row][col1 - 1];
        } else {
            sum += this.prefixSum[row][col2];
        }
    }

    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
