"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} actualHeights
 * @return {number}
 */
function heightChecker(heights) {
    const sortedHeights = heights.toSorted(function sortAsc(a, b) {
        return a - b;
    });
    let heightDiscrepancyCounter = 0;
    
    for (let i = 0; i < heights.length; i++) {
        const originalHeight = heights[i];
        const expectedHeight = sortedHeights[i];

        if (expectedHeight !== originalHeight) {
            heightDiscrepancyCounter++;
        }
    }

    return heightDiscrepancyCounter;
}

console.log( heightChecker([1,1,4,2,1,3]) ); // 3
console.log( heightChecker([5,1,2,3,4]) ); // 5
