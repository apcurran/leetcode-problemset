"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    const gridHeight = grid.length;
    const gridBottom = gridHeight - 1;
    const gridWidth = grid[0].length;
    let totalPerimeter = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < gridWidth; column++) {
            const currentSquare = grid[row][column];

            // skip squares with 0 (represents water)
            if (currentSquare !== 1) continue;

            // we have a land (1) square
            // add 4 to perimeter since each square has four sides for perimeter
            totalPerimeter += 4;

            // if there is a row above the square, and it's land (1), subtract 1
            if (row > 0 && grid[row - 1][column] === 1) {
                totalPerimeter--;
            }

            // if there is a row beneath the square, and it's land (1), subtract 1
            if (row < gridBottom && grid[row + 1][column] === 1) {
                totalPerimeter--;
            }
            // if there is a square to the left of the square, and it's land (1), subtract 1
            if (grid[row][column - 1] === 1) {
                totalPerimeter--;
            }
            // if there is a square to the right of the square, and it's land (1), subtract 1
            if (grid[row][column + 1] === 1) {
                totalPerimeter--;
            }
        }
    }

    return totalPerimeter;
}

console.log(
    islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ]),
); // 16
