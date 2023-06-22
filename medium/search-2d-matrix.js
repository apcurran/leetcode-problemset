"use strict";

// /**
//  * Solution 1
//  * Time: O(m * n)
//  * Space: O(m * n)
//  * 
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// function searchMatrix(matrix, target) {
//     const flattenedArr = matrix.flat();

//     return flattenedArr.includes(target);
// }

/**
 * solution 2 -- Passes tests but not efficient enough for problem description
 * time: O(m * log n)
 * space: O(1)
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    for (let row of matrix) {
        const isTargetInRow = binSearch(row, target);

        if (isTargetInRow) return true;
    }

    return false;
}

/**
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {boolean}
 */
function binSearch(arr, target) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer <= rightPointer) {
        const middlePointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
        const value = arr[middlePointer];

        if (value < target) {
            leftPointer = middlePointer + 1;
        } else if (value > target) {
            rightPointer = middlePointer - 1;
        } else {
            // found target in row
            return true;
        }
    }

    return false;
}

console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) ); // true
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13) ); // false
