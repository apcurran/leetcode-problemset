"use strict";

/**
 * solution 1 -- sorting
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {
    // sort ASC by x value
    points.sort((tupleA, tupleB) => tupleA[0] - tupleB[0]);
    let maxWidth = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const nextTupleXValue = points[i + 1][0];
        const currentTupleXValue = points[i][0];
        const xValuesDiff = nextTupleXValue - currentTupleXValue;
        maxWidth = Math.max(maxWidth, xValuesDiff);
    }
    
    return maxWidth;
}

console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])); // 3
