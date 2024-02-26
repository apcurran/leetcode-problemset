"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not counting return array
 * 
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes) {
    let results = new Array(boxes.length).fill(0);

    let ballsCount = 0;
    let movesCount = 0;

    for (let i = 0; i < boxes.length; i++) {
        results[i] += movesCount;

        if (boxes[i] === "1") {
            ballsCount++;
        }

        movesCount += ballsCount;
    }

    // reset vars
    ballsCount = 0;
    movesCount = 0;

    for (let i = boxes.length - 1; i >= 0; i--) {
        results[i] += movesCount;

        if (boxes[i] === "1") {
            ballsCount++;
        }

        movesCount += ballsCount;
    }

    return results;
}

console.log(minOperations("110")); // [1, 1, 3]
console.log(minOperations("001011")); // [11, 8, 5, 4, 3, 4]
