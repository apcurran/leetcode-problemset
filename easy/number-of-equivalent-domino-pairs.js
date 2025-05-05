"use strict";

/**
 * solution 1 -- brute force (TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[][]} dominoes
 * @return {number}
 */
function numEquivDominoPairs(dominoes) {
    let pairsCount = 0;

    for (let i = 0; i < dominoes.length; i++) {
        const [a, b] = dominoes[i];
        
        for (let j = i + 1; j < dominoes.length; j++) {
            const [c, d] = dominoes[j];

            if (a === c && b === d ||
                a === d && b === c
            ) {
                pairsCount++;
            }
        }
    }

    return pairsCount;
}

console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]])); // 3
