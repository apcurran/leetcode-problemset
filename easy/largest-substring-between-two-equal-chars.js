"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function maxLengthBetweenEqualCharacters(str) {
    let charIndices = new Map();
    let maxLength = -1;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!charIndices.has(char)) {
            // add to map
            charIndices.set(char, i);
        } else {
            // already in map
            // calculate distance between chars
            const charPreviousIndex = charIndices.get(char);
            const distanceBetweenCharIndices = i - charPreviousIndex - 1;
            maxLength = Math.max(maxLength, distanceBetweenCharIndices);
        }
    }

    return maxLength;
}

console.log(maxLengthBetweenEqualCharacters("aa")); // 0
console.log(maxLengthBetweenEqualCharacters("abca")); // 2
console.log(maxLengthBetweenEqualCharacters("cbzxy")); // -1
