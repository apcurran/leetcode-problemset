/**
 * solution 1
 * time: O(n^2)
 * space: O(1) -- not including required results array
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
function findDegrees(matrix) {
    let results = [];

    for (let subarr of matrix) {
        const subarrDegreeSum = subarr.reduce((sum, curr) => sum + curr, 0);
        results.push(subarrDegreeSum);
    }

    return results;
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
