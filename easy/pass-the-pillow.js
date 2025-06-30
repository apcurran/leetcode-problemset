"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
function passThePillow(n, time) {
    let currentPillowPosition = 1;
    let currentTime = 0;
    let currentDirection = 1;

    while (currentTime < time) {
        if (
            currentPillowPosition + currentDirection > 0 &&
            currentPillowPosition + currentDirection <= n
        ) {
            currentPillowPosition += currentDirection;
            currentTime++;
        } else {
            currentDirection *= -1;
        }
    }

    return currentPillowPosition;
}

console.log(passThePillow(4, 5)); // 2
console.log(passThePillow(3, 2)); // 3
