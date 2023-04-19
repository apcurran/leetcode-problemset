"use strict";

/**
 * solution 1 -- closure
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    let num = n - 1;

    return function incrementer() {
        num++;

        return num;
    };
}

 
const counter = createCounter(10);
console.log( counter() ); // 10
console.log( counter() ); // 11
console.log( counter() ); // 12
