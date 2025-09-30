/**
 * solution 1 -- BFS
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {string[][]} grid
 * @return {number} the number of islands
 */
function numIslands(grid) {
    if (!grid) return 0;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    // get dimensions
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let islandsCount = 0;

    /**
     * @param {number} r
     * @param {number} c
     * @returns {void}
     */
    function bfs(r, c) {
        let queue = [[r, c]];

        while (queue.length > 0) {
            const [row, col] = queue.shift();

            for (let [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    grid[nr][nc] === "1"
                ) {
                    queue.push([nr, nc]);
                    grid[nr][nc] = "0";
                }
            }
        }
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === "1") {
                bfs(row, col);
                islandsCount++;
            }
        }
    }

    return islandsCount;
}

console.log(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]),
); // 1
