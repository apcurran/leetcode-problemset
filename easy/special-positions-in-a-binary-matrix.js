"use strict";

/**
 * solution 1
 * time: O(r * c * (r + c))
 * space: O(1)
 * 
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat) {
    let specialCellsCount = 0;
    const ROWS = mat.length;
    const COLS = mat[0].length;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            // skip any cell that is not 1 (cannot be special)
            if (mat[row][col] === 0) continue;

            let goodCell = true;

            for (let r = 0; r < ROWS; r++) {
                // no other cell in this row should be 1 (cannot be special)
                if (r !== row && mat[r][col] === 1) {
                    goodCell = false;

                    break;
                }
            }

            for (let c = 0; c < COLS; c++) {
                // no other cell in this column should be 1 (cannot be special)
                if (c !== col && mat[row][c] === 1) {
                    goodCell = false;

                    break;
                }
            }

            if (goodCell) {
                specialCellsCount++;
            }
        }
    }

    return specialCellsCount;
}

console.log(numSpecial([[1,0,0], [0,1,0], [0,0,1]])); // 3
