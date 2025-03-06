"use strict";

/**
 * solution 1 -- hashset cache
 * n = grid length
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number[][]} grid
 * @return {[number, number]} [repeatedNum, missingNum]
 */
function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    let seenNums = new Set();
    let repeatedNum = 0;
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < grid.length; col++) {
            const num = grid[row][col];
            
            if (seenNums.has(num)) repeatedNum = num;
            
            seenNums.add(num);
        }
    }
    
    let missingNum = 0;

    for (let value = 1; value <= n * n; value++) {
        if (!seenNums.has(value)) {
            missingNum = value;

            break;
        }
    }

    return [repeatedNum, missingNum];
}

console.log(findMissingAndRepeatedValues([[1,3],[2,2]])); // [2, 4]
console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])); // [9, 5]
