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

    let notEmpty = 0;
    let runningSum = 0;

    for (let i = 0; i < boxes.length; i++) {
        results[i] += runningSum;

        if (boxes[i] === "1") {
            notEmpty++;
        }

        runningSum += notEmpty;
    }

    // reset vars
    notEmpty = 0;
    runningSum = 0;

    for (let i = boxes.length - 1; i >= 0; i--) {
        results[i] += runningSum;

        if (boxes[i] === "1") {
            notEmpty++;
        }

        runningSum += notEmpty;
    }

    return results;
}

console.log(minOperations("110")); // [1, 1, 3]
console.log(minOperations("001011")); // [11, 8, 5, 4, 3, 4]
