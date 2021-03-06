"use strict";

/**
 * @param {number} n
 * @return {number}
 */
let cache = new Map();

function climbStairs(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }

    let result = 0;

    if (cache.has(n)) return cache.get(n);

    result = climbStairs(n - 1) + climbStairs(n - 2);
    cache.set(n, result);

    return result;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3