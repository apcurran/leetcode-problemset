"use strict";

/**
 * solution 1 -- greedy
 * time: O(n * log n)
 * space: O(n) -- sort
 * 
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
    pairs.sort((pair1, pair2) => pair1[1] - pair2[1]);
    let endValue = pairs[0][1];
    let resultLength = 1;
    
    for (let i = 1; i < pairs.length; i++) {
        if (endValue < pairs[i][0]) {
            resultLength++;
            endValue = pairs[i][1];
        }
    }

    return resultLength;
}

console.log(findLongestChain([[1, 2], [2, 3], [3, 4]])); // 2
console.log(findLongestChain([[1, 2], [7, 8], [4, 5]])); // 3
