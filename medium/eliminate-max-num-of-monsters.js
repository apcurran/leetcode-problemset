"use strict";

/**
 * solution 1
 * time: O(n * log n) -- due to array.sort()
 * space: O(1)
 * 
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
function eliminateMaximum(dist, speed) {
    let minuteReached = [];

    for (let i = 0; i < dist.length; i++) {
        const monsterDistance = dist[i];
        const monsterSpeed = speed[i];
        const monsterMinuteArrival = Math.ceil(monsterDistance / monsterSpeed);
        minuteReached.push(monsterMinuteArrival);
    }

    minuteReached.sort((a, b) => a - b);

    let resultCount = 0;

    for (let minute = 0; minute < minuteReached.length; minute++) {
        if (minute >= minuteReached[minute]) {
            return resultCount;
        }

        resultCount++;
    }

    return resultCount;
}

console.log( eliminateMaximum([1,3,4], [1,1,1]) ); // 3
