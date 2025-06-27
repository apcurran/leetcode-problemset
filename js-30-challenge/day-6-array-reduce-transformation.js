"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
    let accumulator = init;

    for (let elem of nums) {
        const updatedAccumulator = fn(accumulator, elem);
        accumulator = updatedAccumulator;
    }

    return accumulator;
}

console.log( reduce([1, 2, 3, 4], function sum(accum, curr) {
    return accum + curr; 
}, 0 ) );
// 10 
console.log( reduce([1, 2, 3, 4], function sum(accum, curr) {
    return accum + curr * curr; 
}, 100 ) );
// 130
