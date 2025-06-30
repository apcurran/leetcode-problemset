"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- if results are included
 *
 * @param {number[]} mountainHeights
 * @param {number} threshold
 * @return {number[]}
 */
function stableMountains(mountainHeights, threshold) {
    let stableMountainIndices = [];

    for (let i = 1; i < mountainHeights.length; i++) {
        const previousMountainHeight = mountainHeights[i - 1];

        if (previousMountainHeight > threshold) {
            stableMountainIndices.push(i);
        }
    }

    return stableMountainIndices;
}

console.log(stableMountains([1, 2, 3, 4, 5], 2)); // [3, 4]
console.log(stableMountains([10, 1, 10, 1, 10], 3)); // [1, 3]
