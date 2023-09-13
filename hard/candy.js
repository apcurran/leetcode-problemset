"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} ratings
 * @return {number}
 */
function candy(ratings) {
    // default to 1 candy per child minimum
    let candies = new Array(ratings.length).fill(1);

    // compare current candy amount with left neighbor
    // (skip first 0 index)
    for (let i = 1; i < ratings.length; i++) {
        const currentRating = ratings[i];
        const leftNeighborRating = ratings[i - 1];

        if (leftNeighborRating < currentRating) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // compare current candy amount with right neighbor
    // (skip last index in reverse)
    for (let i = ratings.length - 2; i >= 0; i--) {
        const currentRating = ratings[i];
        const rightNeighborRating = ratings[i + 1];

        if (currentRating > rightNeighborRating) {
            // check if we should keep currentRating or
            // use neighbor's rating + 1
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((sum, current) => sum + current, 0);
}

console.log(candy([1,0,2])); // 5
console.log(candy([1,2,2])); // 4
