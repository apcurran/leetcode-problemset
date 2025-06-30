"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
// function countOdds(low, high) {
//     let oddNumsCount = 0;

//     for (let i = low; i <= high; i++) {
//         if (i % 2 !== 0) oddNumsCount++;
//     }

//     return oddNumsCount;
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 *
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
    const isLowOdd = low % 2 !== 0;
    const isHighOdd = high % 2 !== 0;
    const lowAndHighOddsAdditionalValue = isLowOdd && isHighOdd ? 1 : 0;

    return (high - low) / 2 + lowAndHighOddsAdditionalValue;
}

console.log(countOdds(3, 7)); // [3, 5, 7] -> 3
console.log(countOdds(8, 10)); // [9] -> 1
