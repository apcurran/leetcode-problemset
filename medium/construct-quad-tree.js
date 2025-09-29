function _Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
}

/**
 * solution 1 -- dfs
 * time: O(n^2 * log n)
 * space: O(log n)
 *
 * @param {number[][]} grid
 * @return {_Node}
 */
function construct(grid) {
    /**
     * @param {number} n
     * @param {number} r
     * @param {number} c
     * @returns {_Node}
     */
    function dfs(n, r, c) {
        let allSame = true;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[r][c] !== grid[r + i][c + j]) {
                    allSame = false;

                    break;
                }
            }
        }

        if (allSame) {
            return new _Node(grid[r][c] === 1, true);
        }

        n = Math.floor(n / 2);
        const topLeft = dfs(n, r, c);
        const topRight = dfs(n, r, c + n);
        const bottomLeft = dfs(n, r + n, c);
        const bottomRight = dfs(n, r + n, c + n);

        return new _Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    return dfs(grid.length, 0, 0);
}
