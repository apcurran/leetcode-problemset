/**
 * solution 1
 * time: O(n^2)
 * space: O(n) -- hashsets
 *
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    for (let row = 0; row < 9; row++) {
        let seenValues = new Set();

        for (let i = 0; i < 9; i++) {
            const cellValue = board[row][i];

            if (cellValue === ".") {
                continue;
            }

            if (seenValues.has(cellValue)) {
                return false;
            }

            seenValues.add(cellValue);
        }
    }

    for (let col = 0; col < 9; col++) {
        let seenValues = new Set();

        for (let i = 0; i < 9; i++) {
            const cellValue = board[i][col];

            if (cellValue === ".") {
                continue;
            }

            if (seenValues.has(cellValue)) {
                return false;
            }

            seenValues.add(cellValue);
        }
    }

    for (let square = 0; square < 9; square++) {
        let seenValues = new Set();

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const row = Math.floor(square / 3) * 3 + i;
                const col = (square % 3) * 3 + j;
                const cellValue = board[row][col];

                if (cellValue === ".") {
                    continue;
                }

                if (seenValues.has(cellValue)) {
                    return false;
                }

                seenValues.add(cellValue);
            }
        }
    }

    return true;
}

const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board)); // true
