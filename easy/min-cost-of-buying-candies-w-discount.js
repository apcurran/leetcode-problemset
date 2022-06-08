"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {number[]} cost
 * @return {number}
 */
function minimumCost(cost) {
    // sort high to low order
    cost.sort((a, b) => b - a);
    let totalCost = 0;

    for (let [index, candy] of cost.entries()) {
        // skip each third index, this candy piece is free
        // index % 3 === 2 since the indices start at 0
        if (index % 3 === 2) continue;

        totalCost += candy;
    }

    return totalCost;
}

console.log( minimumCost([6, 5, 7, 9, 2, 2]) ); // 23
