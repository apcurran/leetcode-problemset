"use strict";

/**
 * solution 1 -- brute force (nested loops) TLE
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} values
 * @return {number}
 */
function maxScoreSightseeingPair(values) {
    let max = 0;

    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            const currentScore = values[i] + values[j] + i - j;
            max = Math.max(max, currentScore);
        }
    }

    return max;
}

console.log(maxScoreSightseeingPair([8,1,5,2,6])); // 11
