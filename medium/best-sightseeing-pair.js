"use strict";

// /**
//  * solution 1 -- brute force (nested loops) TLE
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} values
//  * @return {number}
//  */
// function maxScoreSightseeingPair(values) {
//     let max = 0;

//     for (let i = 0; i < values.length; i++) {
//         for (let j = i + 1; j < values.length; j++) {
//             const currentScore = values[i] + values[j] + i - j;
//             max = Math.max(max, currentScore);
//         }
//     }

//     return max;
// }

/**
 * solution 2 -- dynamic programming
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} values
 * @return {number}
 */
function maxScoreSightseeingPair(values) {
    let max = 0;
    //               1st elem - distance between 1st and 2nd elems
    let currentMax = values[0] - 1;

    // starting at the second element in values
    for (let i = 1; i < values.length; i++) {
        const currentScore = values[i] + currentMax;
        max = Math.max(max, currentScore);
        currentMax = Math.max(currentMax - 1, values[i] - 1);
    }

    return max;
}

console.log(maxScoreSightseeingPair([8,1,5,2,6])); // 11
