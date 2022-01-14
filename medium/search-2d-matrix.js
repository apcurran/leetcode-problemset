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

/**
 * Solution 2 -- Execution time improvement, uses a bit more memory
 * Time: O(n) -- Set object's .has() method is faster than array.includes()
 * Space: O(n)
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    const flattenedArr = matrix.flat();
    const matrixElemsSet = new Set(flattenedArr);

    return matrixElemsSet.has(target);
}

console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) ); // true
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13) ); // false
