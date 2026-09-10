/**
 * solution 1 -- direct simulation
 * time: O(k^2)
 * space: O(1)
 *
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
function reverseSubmatrix(grid, x, y, k) {
    let topRow = x;
    let bottomRow = x + k - 1;

    while (topRow < bottomRow) {
        for (let col = y; col <= y + k - 1; col++) {
            // swap corresponding vals
            [grid[topRow][col], grid[bottomRow][col]] = [grid[bottomRow][col], grid[topRow][col]];
        }

        // move pointers inward
        topRow++;
        bottomRow--;
    }

    return grid;
}

console.log(
    reverseSubmatrix(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        1,
        0,
        3,
    ),
);
// [
//     [1, 2, 3, 4],
//     [13, 14, 15, 8],
//     [9, 10, 11, 12],
//     [5, 6, 7, 16],
// ];
