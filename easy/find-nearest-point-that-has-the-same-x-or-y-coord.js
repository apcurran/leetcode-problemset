"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number} index of smallest Manhattan distance
 */
function nearestValidPoint(x, y, points) {
    let smallestDistance = Infinity;
    let smallestDistanceIndex = -1;

    for (let i = 0; i < points.length; i++) {
        const [currentPointX, currentPointY] = points[i];

        // skip invalid coordinates
        if (currentPointX !== x && currentPointY !== y) continue;

        const manhattanDistance = Math.abs(x - currentPointX) + Math.abs(y - currentPointY);

        if (manhattanDistance < smallestDistance) {
            smallestDistance = manhattanDistance;
            smallestDistanceIndex = i;
        }
    }

    return smallestDistanceIndex;
}

console.log( nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]) ); // 2
console.log( nearestValidPoint(3, 4, [[2, 3]]) ); // -1
