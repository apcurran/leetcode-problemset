"use strict";

/**
 * solution 1 -- find the median
 * time: O(n * log n) -- due to sorting
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minMoves2(nums) {
    nums.sort((a, b) => a - b);
    const median = nums[Math.floor(nums.length / 2)];
    let totalMoves = 0;
    
    for (let num of nums) {
        const diff = Math.abs(num - median);
        totalMoves += diff;
    }

    return totalMoves;
}

console.log( minMoves2([1, 10, 2, 9]) ); // 16
