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
    let smallestCost = costs[0];
    let results = new Array(costs.length);
    results[0] = costs[0];

    for (let i = 1; i < costs.length; i++) {
        // compare smallest cost so far with current cost, take smallest
        smallestCost = Math.min(smallestCost, costs[i]);
        // update current index with smallest cost so far
        results[i] = smallestCost;
    }

    return results;
}

console.log(minCosts([5, 3, 4, 1, 3, 2])); // [5,3,3,1,1,1]
