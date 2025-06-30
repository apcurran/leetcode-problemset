"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 1; i < colors.length - 1; i++) {
        const currColor = colors[i];
        const previousColor = colors[i - 1];
        const nextColor = colors[i + 1];

        if (previousColor === currColor && currColor === nextColor) {
            if (currColor === "A") {
                aliceScore++;
            }

            if (currColor === "B") {
                bobScore++;
            }
        }
    }

    return aliceScore > bobScore;
}

console.log(winnerOfGame("AAABABB")); // true
console.log(winnerOfGame("AA")); // false
