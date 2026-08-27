/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
function elevatorRequests(n, requests) {
    let priorFloor = 0; // init starting floor
    let totalTimeInSeconds = 0;

    for (let currFloor of requests) {
        const floorChangeTime = Math.abs(currFloor - priorFloor);
        priorFloor = currFloor;
        totalTimeInSeconds += floorChangeTime;
    }

    return totalTimeInSeconds;
}

console.log(elevatorRequests(5, [2, 1, 4, 3])); // 7
console.log(elevatorRequests(3, [2, 0, 0])); // 4
