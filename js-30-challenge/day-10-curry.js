"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return curried.bind(this, ...args);
    };
};

function sum(a, b) {
    return a + b; 
}
const csum = curry(sum);
console.log( csum(1)(2) ); // 3
