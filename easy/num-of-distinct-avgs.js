"use strict";

/**
 * solution 1
 * time: O(n^2) -- due to array.shift() inside of a loop
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function distinctAverages(nums) {
    nums.sort((a, b) => a - b);
    let uniqueAvgs = new Set();
    
    while (nums.length > 0) {
        const min = nums.shift();
        const max = nums.pop();
        const avg = (min + max) / 2;
        uniqueAvgs.add(avg);
    }

    return uniqueAvgs.size;
}

console.log( distinctAverages([4, 1, 4, 0, 3, 5]) ); // 2
console.log( distinctAverages([1, 100]) ); // 1
