"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function coloredCells(n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result += 4 * i;
//     }

//     return result;
// }

/**
 * solution 2 -- math formula (gauss-inspired)
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function coloredCells(n) {
    return 1 + ((4 * (n - 1)) / 2) * n;
}

console.log(coloredCells(1)); // 1
console.log(coloredCells(2)); // 5
console.log(coloredCells(3)); // 13
