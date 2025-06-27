"use strict";

/**
 * solution 1
 * time: O(c)
 * space: O(1)
 * 
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
function finalPositionOfSnake(n, commands) {
    let cellPosition = 0; // starts at 0 or top-left grid position

    for (let command of commands) {
        if (command === "DOWN") {
            cellPosition += n;
        } else if (command === "UP") {
            cellPosition -= n;
        } else if (command === "RIGHT") {
            cellPosition += 1;
        } else if (command === "LEFT") {
            cellPosition -= 1;
        }
    }

    return cellPosition;
}

console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"])); // 3
console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"])); // 1
