"use strict";

/**
 * solution 1 -- push to new array
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const isPassingElement = fn(currentElement, i);

        if (isPassingElement) {
            results.push(currentElement);
        }
    }

    return results;
}

console.log( filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10; 
}) ); // [20, 30]
console.log( filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0; 
}) ); // [1]
console.log( filter([-2, -1, 0, 1, 2], function plusOne(n) {
    return n + 1; 
}) ); // [-2,0,1,2]
