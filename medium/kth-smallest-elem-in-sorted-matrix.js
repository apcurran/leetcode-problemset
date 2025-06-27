"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
    const flattenedArr = matrix
        .flat()
        .sort((a, b) => a - b);

    return flattenedArr[k - 1];
}

console.log( kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8) ); // 13
console.log( kthSmallest([[-5]], 1) ); // -5
console.log( kthSmallest([[1, 2], [1, 3]], 2) ); // 1
