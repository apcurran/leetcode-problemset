"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
}

console.log( sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]) ); // [[10, 1], [5, 2], [3, 4]]
