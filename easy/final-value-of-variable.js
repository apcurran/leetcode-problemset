"use strict";

/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
    let xVal = 0;

    for (let op of operations) {
        if (op === "--X" || op === "X--") {
            xVal--;
        } else {
            xVal++;
        }
    }

    return xVal;
}

console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0
