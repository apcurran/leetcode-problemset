"use strict";

/**
 * solution 1 -- cache Map
 * time: O(n)
 * space: O(1) -- space will be only four total vals in map, this will never change
 * 
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
    let directionsMap = new Map([
        ["L", 0],
        ["R", 0],
        ["U", 0],
        ["D", 0],
    ]);

    for (let moveDir of moves) {
        // incr direction for left, right, up, or down based on curr move
        const currMoveDirVal = directionsMap.get(moveDir);
        directionsMap.set(moveDir, currMoveDirVal + 1);
    }

    // subtract opposing direction vals
    const vertDiff = directionsMap.get("U") - directionsMap.get("D");
    const horizDiff = directionsMap.get("L") - directionsMap.get("R");

    return vertDiff === 0 && horizDiff === 0;
}

console.log( judgeCircle("UD") );
console.log( judgeCircle("LL") );
