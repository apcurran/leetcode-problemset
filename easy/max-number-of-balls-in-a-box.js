"use strict";

/**
 * solution 1 -- hashmap
 * n = size of window from lowLimit to highLimit
 * m = size of i number string
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function countBalls(lowLimit, highLimit) {
    let boxes = new Map();
    let maxBall = 0;

    for (let i = lowLimit; i <= highLimit; i++) {
        const boxNumber = String(i)
            .split("")
            .reduce((sum, current) => sum + Number(current), 0);
        const previousBoxCount = boxes.get(boxNumber) || 0;
        const updatedBoxCount = previousBoxCount + 1;
        boxes.set(boxNumber, updatedBoxCount);
        maxBall = Math.max(maxBall, updatedBoxCount);
    }

    return maxBall;
}

console.log(countBalls(1, 10)); // 2
console.log(countBalls(5, 15)); // 2
console.log(countBalls(19, 28)); // 2
