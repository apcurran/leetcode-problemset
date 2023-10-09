"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        const currentNumOfCitations = citations[i];

        if (currentNumOfCitations < i + 1) return i;
    }

    return citations.length;
}

console.log(hIndex([3,0,6,1,5])); // 3
