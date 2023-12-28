"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
    // we start at 0,0 coord
    let visitedCoordinates = new Set(["0,0"]);
    let x = 0;
    let y = 0;

    for (let dir of path) {
        if (dir === "N") {
            y++;
        } else if (dir === "S") {
            y--;
        } else if (dir === "E") {
            x++;
        } else if (dir === "W") {
            x--;
        }

        const currentCoordinate = `${x},${y}`;

        // check if we have already been to this exact coord before
        if (visitedCoordinates.has(currentCoordinate)) {
            return true;
        }

        // add current coord to hashset
        visitedCoordinates.add(currentCoordinate);
    }

    return false;
}

console.log(isPathCrossing("NES")); // false
console.log(isPathCrossing("NESWW")); // true
