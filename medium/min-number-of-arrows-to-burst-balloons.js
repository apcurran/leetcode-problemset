"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[][]} points each element is [startPoint, endPoint]
 * @return {number}
 */
function findMinArrowShots(points) {
    points.sort(function sortByStartPoints(a, b) {
        return a[0] - b[0];
    });

    let previous = points[0];
    let result = points.length;

    for (let i = 1; i < points.length; i++) {
        const current = points[i];

        if (current[0] <= previous[1]) {
            result--;

            // merge points
            const updatedStart = current[0];
            const updatedEnd = Math.min(current[1], previous[1]);
            previous = [updatedStart, updatedEnd];
        } else {
            previous = current;
        }
    }

    return result;
}

console.log(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ]),
); // 2
console.log(
    findMinArrowShots([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
    ]),
); // 4
