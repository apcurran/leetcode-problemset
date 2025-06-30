"use strict";

// /**
//  * solution 1
//  * time: O(n^3)
//  * space: O(n)
//  *
//  * @param {number[][]} grid
//  * @return {number}
//  */
// function deleteGreatestValue(grid) {
//     let maxResult = 0;

//     while (grid[0].length > 0) {
//         let maxRowValues = [];

//         for (let row of grid) {
//             const maxRowValue = Math.max(...row);
//             const maxRowValueIndex = row.indexOf(maxRowValue);
//             // pull out max
//             const removedMaxValueList = row.splice(maxRowValueIndex, 1);
//             maxRowValues.push(removedMaxValueList[0]);
//         }

//         // after iterating all rows of matrix,
//         // compare maxRowValues array and add largest value to maxResult
//         const largestValueFromAllRows = Math.max(...maxRowValues);
//         maxResult += largestValueFromAllRows;
//     }

//     return maxResult;
// }

/**
 * solution 2 -- optimizations
 * time: O(n * (m * log m))
 * space: O(n)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function deleteGreatestValue(grid) {
    for (let row of grid) {
        // sort ascending (largest value at the end of the row arrray)
        row.sort((a, b) => a - b);
    }

    let maxResult = 0;

    while (grid[0].length > 0) {
        let maxRowValues = [];

        for (let row of grid) {
            const maxRowValue = row.pop();
            maxRowValues.push(maxRowValue);
        }

        // after iterating all rows of matrix,
        // compare maxRowValues array and add largest value to maxResult
        const largestValueFromAllRows = Math.max(...maxRowValues);
        maxResult += largestValueFromAllRows;
    }

    return maxResult;
}

console.log(
    deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1],
    ]),
); // 8

console.log(deleteGreatestValue([[10]])); // 10
