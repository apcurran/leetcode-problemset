"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    intervals.sort((pair1, pair2) => pair1[0] - pair2[0]);
    let results = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];
        const previousEnd = results[results.length - 1][1];

        if (currentStart <= previousEnd) {
            // merge intervals
            // set ending value of previous interval in results to max(previous, current)
            results[results.length - 1][1] = Math.max(previousEnd, currentEnd);
        } else {
            // add interval to results
            results.push(intervals[i]);
        }
    }

    return results;
}

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ]),
); // [[1,6],[8,10],[15,18]] (merged)
