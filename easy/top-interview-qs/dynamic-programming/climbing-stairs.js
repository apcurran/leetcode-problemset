"use strict";

// /**
//  * solution 1 -- recursion top-down approach (TLE -> correct, but too slow)
//  * time: O(2^n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs(n, cache = new Map()) {
//     if (n === 1) {
//         return 1; // only one single-step option
//     } else if (n === 2) {
//         return 2; // two options: take two single-steps, or take one double-step
//     }

//     return climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
// }

// /**
//  * solution 2 -- recursion with cache (memo) top-down approach
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs(n, cache = new Map()) {
//     if (n === 1) {
//         return 1; // only one single-step option
//     } else if (n === 2) {
//         return 2; // two options: take two single-steps, or take one double-step
//     }

//     // try to return previously cached val if it exists
//     if (cache.has(n)) return cache.get(n);

//     // compute new val and store in cache
//     const result = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
//     cache.set(n, result);

//     return result;
// }

/**
 * solution 3 -- iterative DP bottom-up
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let a = 1;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const temp = a;
        a = a + b;
        b = temp;
    }

    return a;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
