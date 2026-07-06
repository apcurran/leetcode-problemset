// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[][]} intervals
//  * @return {number}
//  */
// function removeCoveredIntervals(intervals) {
//     let count = 0;

//     outerLoop: for (let i = 0; i < intervals.length; i++) {
//         const currentInterval = intervals[i];

//         for (let j = 0; j < intervals.length; j++) {
//             if (j === i) continue;

//             // interate again skipping current interval
//             const otherInterval = intervals[j];

//             // given [a, b] [c, d] check that c <= a and b <= d
//             if (otherInterval[0] <= currentInterval[0] && currentInterval[1] <= otherInterval[1]) {
//                 continue outerLoop;
//             }
//         }

//         count++;
//     }

//     return count;
// }

/**
 * solution 2 -- sorting
 * time: O(n * log n)
 * space: O(n) -- due to array.sort() call
 *
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
    intervals.sort(function startAscEndDesc(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });

    let remaining = 0;
    let maxEnd = -Infinity;

    for (let interval of intervals) {
        const end = interval[1];

        if (end <= maxEnd) {
            continue;
        }

        remaining++;
        maxEnd = end;
    }

    return remaining;
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
