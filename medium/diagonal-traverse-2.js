"use strict";

/**
 * solution 1 queue
 * time: O(n^2) -- array.shift() within loop
 * space: O(n) -- queue
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
function findDiagonalOrder(nums) {
    let results = [];
    let queue = [[0, 0]];

    while (queue.length > 0) {
        const [row, col] = queue.shift();
        const diagonalValue = nums[row][col];
        results.push(diagonalValue);

        const nextRow = row + 1;

        if (!col && nextRow < nums.length) {
            queue.push([nextRow, col]);
        }

        const nextCol = col + 1;

        if (nextCol < nums[row].length) {
            queue.push([row, nextCol]);
        }
    }

    return results;
}

console.log(
    findDiagonalOrder([
        [1, 2, 3, 4, 5],
        [6, 7],
        [8],
        [9, 10, 11],
        [12, 13, 14, 15, 16],
    ]),
);
// [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
