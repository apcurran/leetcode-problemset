"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} actualHeights
 * @return {number}
 */
function heightChecker(actualHeights) {
    const expectedHeights = [...actualHeights].sort((a, b) => a - b);
    let differCounter = 0;

    for (let i = 0; i < actualHeights.length; i++) {
        const currentActualHeight = actualHeights[i];
        const currentExpectedHeight = expectedHeights[i];

        if (currentActualHeight !== currentExpectedHeight) {
            differCounter++;
        }
    }

    return differCounter;
}

console.log( heightChecker([1,1,4,2,1,3]) ); // 3
console.log( heightChecker([5,1,2,3,4]) ); // 5
