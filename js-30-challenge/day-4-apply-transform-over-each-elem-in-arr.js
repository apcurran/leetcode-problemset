"use strict";

/**
 * solution 1
 * n = arr length
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        const updatedValue = fn(currentValue, i);
        results.push(updatedValue);
    }

    return results;
}

console.log( map([1,2,3], function plusone(n) { return n + 1; }) ); // [2, 3, 4]
console.log( map([1,2,3], function plusI(n, i) { return n + i; }) ); // [1, 3, 5]
console.log( map([10,20,30], function constant(n, i) { return 42; }) ); // [42, 42, 42]
