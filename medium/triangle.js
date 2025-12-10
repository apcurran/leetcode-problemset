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

// /**
//  * solution 2 -- DFS recursion (memo)
//  * time: O(n^2)
//  * space: O(n^2)
//  *
//  * @param {number[][]} triangle
//  * @return {number} min path sum from top to bottom
//  */
// function minimumTotal(triangle) {
//     let memo = new Map();

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

//         if (memo.has(`${row}:${col}`)) {
//             return memo.get(`${row}:${col}`);
//         }

//         // can travel to next row, current column
//         const down = dfs(row + 1, col);
//         // OR next row, next column
//         const downRight = dfs(row + 1, col + 1);
//         const result = triangle[row][col] + Math.min(down, downRight);
//         // add to memo hashmap
//         memo.set(`${row}:${col}`, result);

//         return result;
//     }

//     return dfs(0, 0);
// }

/**
 * solution 3 -- iterative bottom-up approach (memo)
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[][]} triangle
 * @return {number} min path sum from top to bottom
 */
function minimumTotal(triangle) {
    const h = triangle.length;
    // copy final row of triangle
    let dpCache = new Int32Array(triangle[h - 1].length);

    for (let i = 0; i < dpCache.length; i++) {
        dpCache[i] = triangle[h - 1][i];
    }

    // iterate from next to last row upwards
    for (let row = h - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            dpCache[col] = triangle[row][col] + Math.min(dpCache[col], dpCache[col + 1]);
        }
    }

    return dpCache[0];
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
console.log(minimumTotal([[-10]])); // -10
