"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- limited to 26 lowercase letters
 *
 * @param {string} str
 * @return {number[]}
 */
function partitionLabels(str) {
    let charsIndicesCache = new Map();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charsIndicesCache.set(char, i);
    }

    let chunkSize = 0;
    let endIndex = 0;
    let resultSizes = [];

    for (let i = 0; i < str.length; i++) {
        chunkSize++;

        const char = str[i];
        const charLastIndex = charsIndicesCache.get(char);

        if (charLastIndex > endIndex) {
            // replace end index
            endIndex = charLastIndex;
        }

        if (i === endIndex) {
            // add chunk size to results
            resultSizes.push(chunkSize);
            // reset counters
            chunkSize = 0;
        }
    }

    return resultSizes;
}

console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9,7,8]
