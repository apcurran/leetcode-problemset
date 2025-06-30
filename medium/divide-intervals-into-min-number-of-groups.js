"use strict";

/**
 * solution 1 -- sort and two pointers
 * time: O(n * log n) -- array.sort()
 * space: O(n)
 *
 * @param {number[][]} intervals
 * @return {number}
 */
function minGroups(intervals) {
    let startingPoints = [];
    let endingPoints = [];

    for (let [startPoint, endPoint] of intervals) {
        startingPoints.push(startPoint);
        endingPoints.push(endPoint);
    }

    // sort ASC
    startingPoints.sort((a, b) => a - b);
    endingPoints.sort((a, b) => a - b);

    let startPointer = 0;
    let endPointer = 0;
    let groups = 0;
    let result = 0;

    while (startPointer < intervals.length) {
        if (startingPoints[startPointer] <= endingPoints[endPointer]) {
            groups++;
            startPointer++;
        } else {
            groups--;
            endPointer++;
        }

        result = Math.max(result, groups);
    }

    return result;
}

console.log(
    minGroups([
        [5, 10],
        [6, 8],
        [1, 5],
        [2, 3],
        [1, 10],
    ]),
); // 3
