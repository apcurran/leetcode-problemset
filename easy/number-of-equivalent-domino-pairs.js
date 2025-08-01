"use strict";

// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[][]} dominoes
//  * @return {number}
//  */
// function numEquivDominoPairs(dominoes) {
//     let pairsCount = 0;

//     for (let i = 0; i < dominoes.length; i++) {
//         const [a, b] = dominoes[i];

//         for (let j = i + 1; j < dominoes.length; j++) {
//             const [c, d] = dominoes[j];

//             if (a === c && b === d ||
//                 a === d && b === c
//             ) {
//                 pairsCount++;
//             }
//         }
//     }

//     return pairsCount;
// }

/**
 * solution 2 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {number[][]} dominoes
 * @return {number}
 */
function numEquivDominoPairs(dominoes) {
    let seenValues = new Map();
    let pairsCount = 0;

    for (let [a, b] of dominoes) {
        // normalize by determining the smaller num a or b
        // then turn ex. [1, 4] into 14
        // if this num key is encountered, increment as a pair
        const key = a < b ? a * 10 + b : b * 10 + a;
        const count = seenValues.get(key) || 0;
        // update total
        pairsCount += count;
        // increment count
        seenValues.set(key, count + 1);
    }

    return pairsCount;
}

console.log(
    numEquivDominoPairs([
        [1, 2],
        [1, 2],
        [1, 1],
        [1, 2],
        [2, 2],
    ]),
); // 3
