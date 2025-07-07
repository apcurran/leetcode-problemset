"use strict";

/**
 * solution 1 -- greedy
 * time: O(n * log n) -- sorting
 * space: O(maxEnd)
 *
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
    events.sort(function sortByEndDay(dayA, dayB) {
        return dayA[1] - dayB[1];
    });
    const maxDay = events.at(-1).at(-1);
    const nextDay = Array.from({ length: maxDay + 2 }, (_val, i) => i);

    /**
     * @param {number} day
     * @returns {number}
     */
    function search(day) {
        if (nextDay[day] !== day) {
            nextDay[day] = search(nextDay[day]);
        }

        return nextDay[day];
    }

    let count = 0;

    for (let [start, end] of events) {
        const day = search(start);

        if (day <= end) {
            count++;
            nextDay[day] = search(day + 1);
        }
    }

    return count;
}

console.log(
    maxEvents([
        [1, 2],
        [2, 3],
        [3, 4],
    ]),
); // 3
console.log(
    maxEvents([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 2],
    ]),
); // 4
