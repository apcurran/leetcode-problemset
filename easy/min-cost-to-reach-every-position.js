"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} costs
 * @return {number[]}
 */
function minCosts(costs) {
    let results = new Array(costs.length);
    results[0] = costs[0];
    let smallestCost = costs[0];

    for (let i = 1; i < costs.length; i++) {
        smallestCost = Math.min(smallestCost, costs[i]);
        results[i] = smallestCost;
    }

    return results;
}

console.log(minCosts([5, 3, 4, 1, 3, 2])); // [5,3,3,1,1,1]
