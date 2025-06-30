"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    let [newIntervalStart, newIntervalEnd] = newInterval;
    let left = [];
    let right = [];

    for (let interval of intervals) {
        const [currentIntervalStart, currentIntervalEnd] = interval;

        if (currentIntervalEnd < newIntervalStart) {
            left.push(interval);
        } else if (currentIntervalStart > newIntervalEnd) {
            right.push(interval);
        } else {
            // merge overlaps
            newIntervalStart = Math.min(newIntervalStart, currentIntervalStart);
            newIntervalEnd = Math.max(newIntervalEnd, currentIntervalEnd);
        }
    }

    return [...left, [newIntervalStart, newIntervalEnd], ...right];
}

console.log(
    insert(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5],
    ),
); // [[1,5],[6,9]]
