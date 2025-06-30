"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(dominoes) {
    const standingStraightUpDominoe = ".";
    let dominoesList = [...dominoes];
    let queue = [];

    for (let i = 0; i < dominoes.length; i++) {
        const currentDominoe = dominoes[i];

        if (currentDominoe !== standingStraightUpDominoe) {
            queue.push([i, currentDominoe]);
        }
    }

    while (queue.length > 0) {
        const [dominoeIndex, dominoeDirection] = queue.shift();

        if (dominoeDirection === "L") {
            if (
                dominoeIndex > 0 &&
                dominoesList[dominoeIndex - 1] === standingStraightUpDominoe
            ) {
                queue.push([dominoeIndex - 1, "L"]);
                dominoesList[dominoeIndex - 1] = "L";
            }
        } else if (dominoeDirection === "R") {
            if (
                dominoeIndex + 1 < dominoesList.length &&
                dominoesList[dominoeIndex + 1] === standingStraightUpDominoe
            ) {
                if (
                    dominoeIndex + 2 < dominoesList.length &&
                    dominoesList[dominoeIndex + 2] === "L"
                ) {
                    queue.shift(); // remove left leaning dominoe
                } else {
                    queue.push([dominoeIndex + 1, "R"]);
                    dominoesList[dominoeIndex + 1] = "R";
                }
            }
        }
    }

    return dominoesList.join("");
}

console.log(pushDominoes(".L.R...LR..L..")); // "LL.RR.LLRRLL.."
