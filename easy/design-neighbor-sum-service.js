"use strict";

class NeighborSum {
    /**
     * @param {number[][]} grid
     */
    constructor(grid) {
        this.grid = grid;
        this.totalRows = this.grid.length;
        this.totalCols = this.grid[0].length;
    }

    /** 
     * @param {number} value
     * @return {number}
     */
    adjacentSum(value) {
        let valueRow = -1;
        let valueCol = -1;

        outerLoop: for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.totalCols; col++) {
                if (this.grid[row][col] === value) {
                    valueRow = row;
                    valueCol = col;

                    break outerLoop;
                }
            }
        }

        // now, we have value row and col
        // get adjacent neighbors
        const top = valueRow - 1 < 0 ? 0 : this.grid[valueRow - 1][valueCol]; // default to 0
        const right = valueCol + 1 >= this.totalCols ? 0 : this.grid[valueRow][valueCol + 1];
        const bottom = valueRow + 1 >= this.grid.length ? 0 : this.grid[valueRow + 1][valueCol];
        const left = valueCol - 1 < 0 ? 0 : this.grid[valueRow][valueCol - 1];
        
        return top + right + bottom + left;
    }

    /** 
     * @param {number} value
     * @return {number}
     */
    diagonalSum(value) {
        let valueRow = -1;
        let valueCol = -1;

        outerLoop: for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.totalCols; col++) {
                if (this.grid[row][col] === value) {
                    valueRow = row;
                    valueCol = col;

                    break outerLoop;
                }
            }
        }

        // now, we have value row and col
        // get diagonal neighbors
        const topRight = (valueRow > 0 && valueCol < this.totalCols - 1) ? this.grid[valueRow - 1][valueCol + 1] : 0;
        const bottomRight = (valueRow < this.totalRows - 1 && valueCol < this.totalCols - 1) ? this.grid[valueRow + 1][valueCol + 1] : 0;
        const bottomLeft = (valueRow < this.totalRows - 1 && valueCol > 0) ? this.grid[valueRow + 1][valueCol - 1] : 0;
        const topLeft = (valueRow > 0 && valueCol > 0) ? this.grid[valueRow - 1][valueCol - 1] : 0;
        
        return topRight + bottomRight + bottomLeft + topLeft;
    }
}
 
// Your NeighborSum object will be instantiated and called as such:
const obj = new NeighborSum(
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ],
);
const param_1 = obj.adjacentSum(1); // 6
const param_2 = obj.diagonalSum(4); // 16

