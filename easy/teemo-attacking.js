"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
    let totalSeconds = 0;

    for (let i = 0; i < timeSeries.length; i++) {
        const currAttack = timeSeries[i];
        const nextAttack = timeSeries[i + 1];
        const attackTimeDiff = nextAttack - currAttack;

        if (attackTimeDiff >= duration || !nextAttack) {
            totalSeconds += duration;
        } else if (attackTimeDiff <= duration) {
            totalSeconds += attackTimeDiff;
        }
    }

    return totalSeconds;
}

console.log( findPoisonedDuration([1, 4], 2) ); // 4
console.log( findPoisonedDuration([1, 2], 2) ); // 3
