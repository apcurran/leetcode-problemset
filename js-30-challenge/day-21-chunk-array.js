"use strict";

/**
 * solution 1
 * n = array length
 * s = size
 * time: O(n / s * s)
 * space: O(n)
 *
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
function chunk(arr, size) {
    let chunks = [];

    for (let i = 0; i < arr.length; i += size) {
        const piece = arr.slice(i, size + i);
        chunks.push(piece);
    }

    return chunks;
}

console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunk([1, 9, 6, 3, 2], 3)); // [[1,9,6],[3,2]]
