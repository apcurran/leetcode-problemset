"use strict";

// /**
//  * solution 1 -- iterative DP bottom-up
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} cost
//  * @returns {number}
//  */
// function minCostClimbingStairs(cost) {
//     let first = cost[0];
//     let second = cost[1];

//     for (let i = 2; i < cost.length; i++) {
//         const minCostCurr = cost[i] + Math.min(first, second);
//         first = second;
//         second = minCostCurr;
//     }

//     return Math.min(first, second);
// }

// /**
//  * solution 2 -- recursive DP top-down
//  * time: O(2^n)
//  * space: O(n)
//  *
//  * @param {number[]} costArr
//  * @returns {number}
//  */
// function minCostClimbingStairs(costArr) {
//     const n = costArr.length;
//     const total1 = minCost(costArr, n - 1);
//     const total2 = minCost(costArr, n - 2);

//     return Math.min(total1, total2);
// }

// /**
//  * @param {number[]} costArr
//  * @param {number} n
//  */
// function minCost(costArr, n) {
//     if (n < 0) return 0;

//     if (n === 0 || n === 1) return costArr[n];

//     const total1 = minCost(costArr, n - 1);
//     const total2 = minCost(costArr, n - 2);

//     return costArr[n] + Math.min(total1, total2);
// }

/**
 * solution 3 -- recursive DP top-down with cache (memo)
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} costArr
 * @returns {number}
 */
function minCostClimbingStairs(costArr, cache = new Map()) {
    const n = costArr.length;
    const total1 = minCost(costArr, n - 1, cache);
    const total2 = minCost(costArr, n - 2, cache);

    return Math.min(total1, total2);
}

/**
 * @param {number[]} costArr
 * @param {number} n
 * @param {Map} cache
 */
function minCost(costArr, n, cache) {
    if (n < 0) return 0;

    if (n === 0 || n === 1) return costArr[n];

    if (cache.has(n)) return cache.get(n);

    const total1 = minCost(costArr, n - 1, cache);
    const total2 = minCost(costArr, n - 2, cache);
    const result = costArr[n] + Math.min(total1, total2);
    cache.set(n, result);

    return result;
}

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
