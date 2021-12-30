"use strict";

/**
 * Solution 1
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);

    return candies.map((kidCandiesCount) => kidCandiesCount + extraCandies >= maxCandies ? true : false);
}

console.log( kidsWithCandies([2, 3, 5, 1, 3], 3) ); // [true, true, true, false, true]
