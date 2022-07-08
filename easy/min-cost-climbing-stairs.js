"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} cost 
 * @returns {number}
 */
function minCostClimbingStairs(cost) {
    let first = cost[0];
    let second = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const minCostCurr = cost[i] + Math.min(first, second);
        first = second;
        second = minCostCurr;
    }

    return Math.min(first, second);
}

console.log( minCostClimbingStairs([10,15,20]) ); // 15
console.log( minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]) ); // 6
