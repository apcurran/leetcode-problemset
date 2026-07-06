/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
    let count = 0;

    outerLoop: for (let i = 0; i < intervals.length; i++) {
        const outerInterval = intervals[i];

        for (let j = 0; j < intervals.length; j++) {
            // interate again skipping current interval
            const innerInterval = intervals[j];

            if (j === i) continue;
            // given [a, b] [c, d] check that c <= a and b <= d
            if (innerInterval[0] <= outerInterval[0] && outerInterval[1] <= innerInterval[1]) {
                continue outerLoop;
            }
        }

        count++;
    }

    return count;
}

console.log(
    removeCoveredIntervals([
        [1, 4],
        [3, 6],
        [2, 8],
    ]),
); // 2 -> [3,6] removed
console.log(
    removeCoveredIntervals([
        [1, 4],
        [2, 3],
    ]),
); // 1
