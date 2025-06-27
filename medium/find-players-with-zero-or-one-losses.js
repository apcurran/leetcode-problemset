"use strict";

/**
 * solution 1 -- hashset
 * time: O(n * log n) -- sort()
 * space: O(n)
 * 
 * @param {number[][]} matches
 * @return {number[][]}
 */
function findWinners(matches) {
    let zeroLoss = new Set();
    let oneLoss = new Set();
    let moreThanOneLoss = new Set();

    for (let [winner, loser] of matches) {
        // take care of winner
        if (!oneLoss.has(winner) && !moreThanOneLoss.has(winner)) {
            zeroLoss.add(winner);
        }

        // add or adjust loser
        if (zeroLoss.has(loser)) {
            zeroLoss.delete(loser);
            oneLoss.add(loser);
        } else if (oneLoss.has(loser)) {
            oneLoss.delete(loser);
            moreThanOneLoss.add(loser);
        } else if (moreThanOneLoss.has(loser)) {
            continue;
        } else {
            oneLoss.add(loser);
        }
    }

    // convert Set objs to arrays and sort ASC order
    const matchLossesZero = [...zeroLoss].sort(sortAsc);
    const matchLossesOne = [...oneLoss].sort(sortAsc);

    return [matchLossesZero, matchLossesOne];
}

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sortAsc(a, b) {
    return a - b;
}

console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]));
// [[1,2,10], [4,5,7,8]]

