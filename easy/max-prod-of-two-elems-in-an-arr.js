"use strict";

/**
 * solution 1
 * time: O(n * log n) -- due to sorting first
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    nums.sort((a, b) => b - a);
    const largestNum = nums[0];
    const nextLargestNum = nums[1];
    
    return (largestNum - 1) * (nextLargestNum - 1);
}

console.log( maxProduct([3, 4, 5, 2]) ); // 12
console.log( maxProduct([1, 5, 4, 5]) ); // 16
console.log( maxProduct([3, 7]) ); // 12
