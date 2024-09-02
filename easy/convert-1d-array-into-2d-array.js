"use strict";

/**
 * solution 1 -- simulation
 * time: O(m * n)
 * space: O(m * n) -- if counting result array
 * 
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
function construct2DArray(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }

    // 2d array
    let result = new Array(m);
    let index = 0;

    for (let i = 0; i < m; i++) {
        // new row
        result[i] = new Array(n);

        for (let j = 0; j < n; j++) {
            // assign original value to new row, col value
            result[i][j] = original[index];
            index++;
        }
    }

    return result;
}

console.log(construct2DArray([1,2,3,4], 2, 2)); // [[1, 2], [3, 4]]
