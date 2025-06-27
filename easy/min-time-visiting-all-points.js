"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
    let totalSeconds = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const currentPoint = points[i];
        const nextPoint = points[i + 1];

        const[currentPointX, currentPointY] = currentPoint;
        const[nextPointX, nextPointY] = nextPoint;
        const distanceX = Math.abs(currentPointX - nextPointX);
        const distanceY = Math.abs(currentPointY - nextPointY);

        totalSeconds += Math.max(distanceX, distanceY);
    }

    return totalSeconds;
}

console.log( minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]) ); // 7
