"use strict";

// /**
//  * Solution 1
//  * Time: O(n)
//  * Space: O(n)
//  * 
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// function searchMatrix(matrix, target) {
//     const flattenedArr = matrix.flat();

//     return flattenedArr.includes(target);
// }

// /**
//  * Solution 2 -- Execution time improvement, uses a bit more memory
//  * Time: O(n) -- Set object's .has() method is faster than array.includes()
//  * Space: O(n)
//  * 
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// function searchMatrix(matrix, target) {
//     const flattenedArr = matrix.flat();
//     const matrixElemsSet = new Set(flattenedArr);

//     return matrixElemsSet.has(target);
// }

// /**
//  * Solution 3 -- binary search
//  * Time: O(n) -- .flat()? or O(log n) for bin search
//  * Space: O(n) -- flattened arr copy
//  * 
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// function searchMatrix(matrix, target) {
//     const flattenedArr = matrix.flat();

//     // impl bin search
//     let startIndex = 0;
//     let endIndex = flattenedArr.length - 1;
//     let middleIndex = 0;

//     while (startIndex <= endIndex) {
//         middleIndex = Math.floor((startIndex + endIndex) / 2);

//         if (flattenedArr[middleIndex] === target) return true;

//         if (flattenedArr[middleIndex] < target) {
//             // search right half
//             startIndex = middleIndex + 1;
//         } else {
//             // search left half
//             endIndex = middleIndex - 1;
//         }
//     }

//     return false;
// }

/**
 * Solution 4 -- binary search
 * m = num of matrix rows
 * n = num of elems in a row
 * Time: O(m * log n)
 * Space: O(1)
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    for (let row of matrix) {
        // impl bin search
        let startIndex = 0;
        let endIndex = row.length - 1;
        let middleIndex = 0;
    
        while (startIndex <= endIndex) {
            middleIndex = Math.floor((startIndex + endIndex) / 2);
    
            if (row[middleIndex] === target) return true;
    
            if (row[middleIndex] < target) {
                // search right half
                startIndex = middleIndex + 1;
            } else {
                // search left half
                endIndex = middleIndex - 1;
            }
        }
    }
    
    return false;
}

console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) ); // true
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13) ); // false
