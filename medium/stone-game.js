"use strict";

/**
 * Solution 1 -- O(n)
 * @param {number[]} piles
 * @return {boolean} - true if Alice wins, false if Bob wins
 */
function stoneGame(piles) {
    let aliceScore = 0;
    let bobScore = 0;

    while (piles.length) {
        const firstArrNum = piles.slice(0, 1)[0];
        const lastArrNum = piles.slice(-1)[0];

        if (firstArrNum >= lastArrNum) {
            // Add Alice's number
            const takeFirstNum = piles.shift();
            aliceScore += takeFirstNum;

            // Add Bob's number
            const bobsNumber = piles.pop();
            bobScore += bobsNumber;
        } else {
            // Add Alice's number
            const takeLastNum = piles.pop();
            aliceScore += takeLastNum;

            // Add Bob's number
            const bobsNumber = piles.shift();
            bobScore += bobsNumber;
        }
    }

    return aliceScore >= bobScore;
}

console.log( stoneGame([5,3,4,5]) ); // true
console.log( stoneGame([3,7,2,3]) ); // true