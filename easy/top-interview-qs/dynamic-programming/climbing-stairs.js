"use strict";

// /**
//  * solution 1 -- recursion with cache (memo)
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs(n, cache = new Map()) {
//     if (n === 1) {
//         return 1;
//     } else if (n === 2) {
//         return 2;
//     }

//     let result = 0;

//     if (cache.has(n)) return cache.get(n);

//     result = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
//     cache.set(n, result);

//     return result;
// }

/**
 * solution 2 -- iterative DP bottom-up
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