"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[][]} grid
 * @return {number}
 */
function findChampion(grid) {
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        if (getSum(grid[i]) === n - 1) {
            return i;
        }
    }
}

/**
 * @param {number[]} arr 
 * @returns {number} sum
 */
function getSum(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}

console.log(findChampion([[0,1],[0,0]])); // 0
console.log(findChampion([[0,0,1],[1,0,1],[0,0,0]])); // 1
