/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} tasks
 * @return {number}
 */
function earliestTime(tasks) {
    let lowestTotalTime = Infinity;

    for (let task of tasks) {
        const time = task[0] + task[1];
        lowestTotalTime = Math.min(lowestTotalTime, time);
    }

    return lowestTotalTime;
}

console.log(
    earliestTime([
        [1, 6],
        [2, 3],
    ]),
); // 5
console.log(
    earliestTime([
        [100, 100],
        [100, 100],
        [100, 100],
    ]),
); // 200
