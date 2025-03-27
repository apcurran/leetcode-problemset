"use strict";

/**
 * solution 1 -- interval
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
function countDays(days, meetings) {
    // sort based on start time of each meeting tuple
    meetings.sort(function sortAsc(meetingA, meetingB) {
        return meetingA[0] - meetingB[0];
    });

    let previousEnd = 0;
    let result = days;

    for (let [start, end] of meetings) {
        start = Math.max(start, previousEnd + 1);
        const length = end - start + 1;
        result -= Math.max(length, 0);
        previousEnd = Math.max(previousEnd, end);
    }

    return result;
}

console.log(countDays(10, [[5,7],[1,3],[9,10]])); // 2
