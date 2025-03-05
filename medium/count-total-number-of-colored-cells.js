"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function coloredCells(n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result += 4 * i;
    }

    return result;
}

console.log(coloredCells(1)); // 1
console.log(coloredCells(2)); // 5
console.log(coloredCells(3)); // 13
