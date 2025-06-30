"use strict";

// /**
//  * Solution 1
//  * Time: O(n)
//  * Space: O(n)
//  *
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// function kidsWithCandies(candies, extraCandies) {
//     const maxCandies = Math.max(...candies);

//     return candies.map((kidCandiesCount) => kidCandiesCount + extraCandies >= maxCandies ? true : false);
// }

/**
 * Solution 2 -- slight optimization -- not copying (spreading) arr with startingMaxCandies
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    let startingMaxCandies = -Infinity;

    for (let candyAmount of candies) {
        if (candyAmount > startingMaxCandies) {
            startingMaxCandies = candyAmount;
        }
    }

    let results = [];

    for (let candyAmount of candies) {
        const totalCandySum = candyAmount + extraCandies;

        if (totalCandySum >= startingMaxCandies) {
            results.push(true);
        } else {
            results.push(false);
        }
    }

    return results;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true, true, true, false, true]
