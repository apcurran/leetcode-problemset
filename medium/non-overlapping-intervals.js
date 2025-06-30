"use strict";

/**
 * solution 1 -- greedy
 * time: O(n * log n)
 * space: O(n) -- JS engine using Timsort algorithm
 *
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
    intervals.sort((intervalA, intervalB) => intervalA[1] - intervalB[1]);
    let k = -Infinity;
    let removedIntervalsCount = 0;

    for (let i = 0; i < intervals.length; i++) {
        const start = intervals[i][0];
        const end = intervals[i][1];

        if (start >= k) {
            k = end;
        } else {
            removedIntervalsCount++;
        }
    }

    return removedIntervalsCount;
}

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ]),
); // 1
