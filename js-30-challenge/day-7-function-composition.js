"use strict";

/**
 * solution 1
 * n = functions length
 * time: O(n)
 * space: O(1)
 * 
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    return function(x) {
        if (functions.length === 0) return x;

        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            const func = functions[i];
            const updatedValue = func(result);
            result = updatedValue;
        }

        return result;
    };
};


const fn = compose( [(x) => x + 1, (x) => 2 * x] );
console.log( fn(4) ); // 9

const fn2 = compose( [(x) => x + 1, (x) => x * x, (x) => 2 * x] );
console.log( fn2(4) ); // 65
