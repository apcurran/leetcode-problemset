"use strict";

/**
 * solution 1 -- stack
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number} target
 * @param {number[]} positions
 * @param {number[]} speeds
 * @return {number}
 */
function carFleet(target, positions, speeds) {
    let positionSpeedTuples = [];

    for (let i = 0; i < positions.length; i++) {
        const position = positions[i];
        const speed = speeds[i];
        positionSpeedTuples.push([position, speed]);
    }

    // reverse sort
    positionSpeedTuples.sort((tupleA, tupleB) => tupleB[0] - tupleA[0]);
    
    let stack = [];

    for (let [position, speed] of positionSpeedTuples) {
        const carTime = (target - position) / speed;
        stack.push(carTime);

        if (stack.length <= 1) continue;

        const topStackCarTime = stack[stack.length - 1];
        const secondToTopOfStackCarTime = stack[stack.length - 2];

        if (topStackCarTime <= secondToTopOfStackCarTime) {
            // collision of cars here -> they now combine
            stack.pop();
        }
    }

    return stack.length;
}

console.log( carFleet(12, [10,8,0,5,3], [2,4,1,1,3]) ); // 3
