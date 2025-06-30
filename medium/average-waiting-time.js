"use strict";

// /**
//  * solution 1 -- simulation
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[][]} customers
//  * @return {number}
//  */
// function averageWaitingTime(customers) {
//     let nextIdleTime = 0;
//     let totalWaitTime = 0;

//     for (let i = 0; i < customers.length; i++) {
//         const [arrivalTime, orderTime] = customers[i];
//         nextIdleTime = Math.max(arrivalTime, nextIdleTime) + orderTime;

//         const customerWaitTime = nextIdleTime - arrivalTime;
//         totalWaitTime += customerWaitTime;
//     }

//     const average = totalWaitTime / customers.length;

//     return average;
// }

/**
 * solution 2 -- simulation
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} customers
 * @return {number}
 */
function averageWaitingTime(customers) {
    let nextIdleTime = 0;
    let sumOfWaitTimes = 0;

    for (const [arrivalTime, orderTime] of customers) {
        if (nextIdleTime > arrivalTime) {
            sumOfWaitTimes += nextIdleTime - arrivalTime;
        } else {
            // fast-forward in time
            nextIdleTime = arrivalTime;
        }

        sumOfWaitTimes += orderTime;
        nextIdleTime += orderTime;
    }

    const average = sumOfWaitTimes / customers.length;

    return average;
}

console.log(
    averageWaitingTime([
        [1, 2],
        [2, 5],
        [4, 3],
    ]),
); // 5
console.log(
    averageWaitingTime([
        [5, 2],
        [5, 4],
        [10, 3],
        [20, 1],
    ]),
); // 3.25
