// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1) -- not including required results array
//  *
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// function findDegrees(matrix) {
//     let results = [];

//     for (let subarr of matrix) {
//         const subarrDegreeSum = subarr.reduce((sum, curr) => sum + curr, 0);
//         results.push(subarrDegreeSum);
//     }

//     return results;
// }

/**
 * solution 2 -- Array.map() method
 * time: O(n^2)
 * space: O(1) -- not including required results array
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
function findDegrees(matrix) {
    return matrix.map((row) => {
        return row.reduce((sum, currValue) => sum + currValue, 0);
    });
}

console.log(
    findDegrees([
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0],
    ]),
); // [2, 2, 2]

console.log(
    findDegrees([
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
    ]),
); // [1, 1, 0]
