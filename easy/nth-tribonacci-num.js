"use strict";

/**
 * solution 1 -- dynamic programming (recursion)
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n
 * @return {number}
 */
function tribonacci(n, cache = new Map()) {
    if (n === 0) return 0;

    if (n === 1 || n === 2) return 1;

    // attempt to retrieve from cache
    if (cache.has(n)) {
        return cache.get(n);
    }

    // not in cache, 
    const value = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache);
    // compute and store
    cache.set(n, value);
    // then return computed answer
    return value;
}

console.log( tribonacci(4) ); // 4
console.log( tribonacci(25) ); // 1389537
