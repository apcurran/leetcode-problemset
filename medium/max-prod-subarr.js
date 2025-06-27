"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    let result = nums[0];
    let currentMin = 1;
    let currentMax = 1;

    for (let num of nums) {
        const product1 = num * currentMax;
        const product2 = num * currentMin;
        currentMax = Math.max(product1, product2, num);
        currentMin = Math.min(product1, product2, num);
        
        result = Math.max(result, currentMax);
    }

    return result;
}

console.log( maxProduct([2, 3, -2, 4]) ); // 6
