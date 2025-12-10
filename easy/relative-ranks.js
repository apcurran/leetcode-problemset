"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(scores) {
    // sort list in desc order first
    const sortedScoresArrCopy = [...scores].toSorted((a, b) => b - a);
    let resArr = [];
    // iterate through original score arr
    for (let score of scores) {
        // findIndex on the curr score
        const sortedScoresIdx = sortedScoresArrCopy.findIndex((num) => num === score);
        // add one to index res (so 1-based index instead of 0-based)
        const scoreRank = sortedScoresIdx + 1;
        // check if num is 1st -> gold, 2nd -> silver, etc.
        let finalRank;

        if (scoreRank === 1) {
            finalRank = "Gold Medal";
        } else if (scoreRank === 2) {
            finalRank = "Silver Medal";
        } else if (scoreRank === 3) {
            finalRank = "Bronze Medal";
        } else {
            finalRank = String(scoreRank);
        }
        // add str num or medal type str to res arr
        resArr.push(finalRank);
    }
    // return res arr
    return resArr;
}

console.log(findRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
