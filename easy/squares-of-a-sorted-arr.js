"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    return nums
            .map((num) => num ** 2)
            .sort((a, b) => a - b);
}

console.log( sortedSquares([-4, -1, 0, 3, 10]) ); // [0,1,9,16,100]
