"use strict";

/**
 * Solution 1 -- O(n)
 * @param {number} n
 * @returns {number}
 */
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 1;
    let b = 1;

    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

// /**
//  * Solution 2 -- O(1)
//  * @param {number} n
//  * @returns {number}
//  */
// function fib(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     const sqrt5 = Math.sqrt(5);

//     return Math.round((((1 + sqrt5) ** n) - ((1 - sqrt5) ** n)) / ((2 ** n) * sqrt5));
// }

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
