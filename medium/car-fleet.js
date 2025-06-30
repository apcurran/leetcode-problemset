"use strict";

// /**
//  * solution 1 -- stack
//  * time: O(n * log n)
//  * space: O(n)
//  *
//  * @param {number} target
//  * @param {number[]} positions
//  * @param {number[]} speeds
//  * @return {number}
//  */
// function carFleet(target, position, speed) {
//     let carTuples = [];

//     for (let i = 0; i < position.length; i++) {
//         const currentCarPosition = position[i];
//         const currentCarSpeed = speed[i];
//         carTuples.push([currentCarPosition, currentCarSpeed]);
//     }

//     // sort tuples by position DESC order
//     carTuples.sort((tupleA, tupleB) => tupleB[0] - tupleA[0]);
//     let stack = [];

//     for (let [carPosition, carSpeed] of carTuples) {
//         const timeToDestination = (target - carPosition) / carSpeed;
//         stack.push(timeToDestination);

//         // first we need two cars to compare AND does the top of stack overlap with the previous item on the stack? -- collision
//         if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
//             stack.pop();
//         }
//     }

//     return stack.length;
// }

/**
 * solution 2 -- counter
 * time: O(n * log n)
 * space: O(n) -- array of (position, speed) pairs
 *
 * @param {number} target
 * @param {number[]} positions
 * @param {number[]} speeds
 * @return {number}
 */
function carFleet(target, positions, speeds) {
    let carTuples = [];

    for (let i = 0; i < positions.length; i++) {
        const currentCarPosition = positions[i];
        const currentCarSpeed = speeds[i];
        carTuples.push([currentCarPosition, currentCarSpeed]);
    }

    let fleetsCount = 0;
    let currTime = 0; // no fleet will be at the target at starting time 0

    // sort tuples by position DESC order
    carTuples.sort((tupleA, tupleB) => tupleB[0] - tupleA[0]);

    for (let [carPosition, carSpeed] of carTuples) {
        const destinationTime = (target - carPosition) / carSpeed;

        if (currTime < destinationTime) {
            fleetsCount++;
            currTime = destinationTime;
        }
    }

    return fleetsCount;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
