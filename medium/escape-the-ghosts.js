"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
function escapeGhosts(ghosts, target) {
    const [targetX, targetY] = target;
    const playerDistance = Math.abs(targetX) + Math.abs(targetY);

    for (let ghost of ghosts) {
        const [ghostX, ghostY] = ghost;
        const ghostDistance =
            Math.abs(ghostX - targetX) + Math.abs(ghostY - targetY);

        if (ghostDistance <= playerDistance) return false;
    }

    return true;
}

console.log(
    escapeGhosts(
        [
            [1, 0],
            [0, 3],
        ],
        [0, 1],
    ),
); // true
console.log(escapeGhosts([[1, 0]], [2, 0])); // false
