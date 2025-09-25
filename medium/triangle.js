// /**
//  * solution 1 -- DFS recursion (no memo)
//  * time: O(2^n) -- each call spawns two more recursive calls
//  * space: O(height) -> O(n)
//  *
//  * @param {number[][]} triangle
//  * @return {number} min path sum from top to bottom
//  */
// function minimumTotal(triangle) {
//     /**
//      * @param {number} row
//      * @param {number} col
//      * @returns {number}
//      */
//     function dfs(row, col) {
//         // base case: end at final row in triangle
//         if (row === triangle.length - 1) {
//             return triangle[row][col];
//         }

//         // can travel to next row, current column
//         const down = dfs(row + 1, col);
//         // OR next row, next column
//         const downRight = dfs(row + 1, col + 1);

//         return triangle[row][col] + Math.min(down, downRight);
//     }

//     return dfs(0, 0);
// }

/**
 * solution 2 -- DFS recursion (memo)
 * time: O(n^2)
 * space: O(n^2)
 *
 * @param {number[][]} triangle
 * @return {number} min path sum from top to bottom
 */
function minimumTotal(triangle) {
    let memo = new Map();

    /**
     * @param {number} row
     * @param {number} col
     * @returns {number}
     */
    function dfs(row, col) {
        // base case: end at final row in triangle
        if (row === triangle.length - 1) {
            return triangle[row][col];
        }

        if (memo.has(`${row}:${col}`)) {
            return memo.get(`${row}:${col}`);
        }

        // can travel to next row, current column
        const down = dfs(row + 1, col);
        // OR next row, next column
        const downRight = dfs(row + 1, col + 1);
        const result = triangle[row][col] + Math.min(down, downRight);
        // add to memo hashmap
        memo.set(`${row}:${col}`, result);

        return result;
    }

    return dfs(0, 0);
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
console.log(minimumTotal([[-10]])); // -10
