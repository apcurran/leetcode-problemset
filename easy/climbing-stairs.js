"use strict";

// /**
//  * solution 1 -- recursion (TLE)
//  * time: O(2^n)
//  * space: O(n)
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs(n) {
//     if (n < 0) return 0;

//     if (n === 0) return 1;

//     return climbStairs(n - 1) + climbStairs(n - 2);
// }

/**
 * solution 2 -- recursion with memoization
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n
 * @return {number}
 */
function climbStairs(n, cache = new Map()) {
    if (n < 0) return 0;

    if (n === 0) return 1;

    if (cache.has(n)) {
        return cache.get(n);
    }

    // else, calc and store
    const numOfWays = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
    cache.set(n, numOfWays);

    return numOfWays;
}

console.log( climbStairs(2) ); // 2
console.log( climbStairs(3) ); // 3
