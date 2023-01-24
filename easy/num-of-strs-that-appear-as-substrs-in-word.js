"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
function numOfStrings(patterns, word) {
    let foundPatternsCount = 0;

    for (let pattern of patterns) {
        if (word.includes(pattern)) foundPatternsCount++;
    }

    return foundPatternsCount;
}

console.log( numOfStrings(["a","abc","bc","d"],"abc") ); // 3
