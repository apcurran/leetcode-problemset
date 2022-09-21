"use strict";

/**
 * solution 1 -- recursion with cache (memo)
 * 
 * @param {number} n
 * @return {number}
 */
function climbStairs(n, cache = new Map()) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }

    let result = 0;

    if (cache.has(n)) return cache.get(n);

    result = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
    cache.set(n, result);

    return result;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3