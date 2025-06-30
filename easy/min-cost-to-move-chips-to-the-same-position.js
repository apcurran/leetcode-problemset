"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} positions
 * @return {number}
 */
function minCostToMoveChips(positions) {
    let evenPositionsCount = 0;
    let oddPositionsCount = 0;

    for (let i = 0; i < positions.length; i++) {
        const currentPosition = positions[i];

        if (currentPosition % 2 === 0) {
            evenPositionsCount++;
        } else {
            oddPositionsCount++;
        }
    }

    return Math.min(evenPositionsCount, oddPositionsCount);
}

console.log(minCostToMoveChips([1, 2, 3])); // 1
console.log(minCostToMoveChips([2, 2, 2, 3, 3])); // 2
